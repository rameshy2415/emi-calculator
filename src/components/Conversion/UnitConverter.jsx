import React, { useState } from "react";
import { Box, TextField, MenuItem, Typography, Button, Grid2, Card, CardContent } from "@mui/material";
import { format } from "date-fns-tz";

const unitTypes = {
  length: ["Meters", "Kilometers", "Miles", "Feet"],
  weight: ["Kilograms", "Grams", "Pounds", "Ounces"],
  temperature: ["Celsius", "Fahrenheit", "Kelvin"],
  time: ["Seconds", "Minutes", "Hours", "Days"],
  datetime: ["Date/Time"],
};

const conversionFactors = {
  length: {
    Meters: { Meters: 1, Kilometers: 0.001, Miles: 0.000621371, Feet: 3.28084 },
    Kilometers: { Meters: 1000, Kilometers: 1, Miles: 0.621371, Feet: 3280.84 },
    Miles: { Meters: 1609.34, Kilometers: 1.60934, Miles: 1, Feet: 5280 },
    Feet: { Meters: 0.3048, Kilometers: 0.0003048, Miles: 0.000189394, Feet: 1 },
  },
  weight: {
    Kilograms: { Kilograms: 1, Grams: 1000, Pounds: 2.20462, Ounces: 35.274 },
    Grams: { Kilograms: 0.001, Grams: 1, Pounds: 0.00220462, Ounces: 0.035274 },
    Pounds: { Kilograms: 0.453592, Grams: 453.592, Pounds: 1, Ounces: 16 },
    Ounces: { Kilograms: 0.0283495, Grams: 28.3495, Pounds: 0.0625, Ounces: 1 },
  },
  temperature: {
    Celsius: { Celsius: (val) => val, Fahrenheit: (val) => (val * 9) / 5 + 32, Kelvin: (val) => val + 273.15 },
    Fahrenheit: { Celsius: (val) => (val - 32) * 5 / 9, Fahrenheit: (val) => val, Kelvin: (val) => (val - 32) * 5 / 9 + 273.15 },
    Kelvin: { Celsius: (val) => val - 273.15, Fahrenheit: (val) => (val - 273.15) * 9 / 5 + 32, Kelvin: (val) => val },
  },
  time: {
    Seconds: { Seconds: 1, Minutes: 1 / 60, Hours: 1 / 3600, Days: 1 / 86400 },
    Minutes: { Seconds: 60, Minutes: 1, Hours: 1 / 60, Days: 1 / 1440 },
    Hours: { Seconds: 3600, Minutes: 60, Hours: 1, Days: 1 / 24 },
    Days: { Seconds: 86400, Minutes: 1440, Hours: 24, Days: 1 },
  },
};

const timeZones = ["UTC", "America/New_York", "Europe/London", "Asia/Kolkata", "Australia/Sydney"];

const UnitConverter = () => {
  const [unitType, setUnitType] = useState("length");
  const [fromUnit, setFromUnit] = useState("Meters");
  const [toUnit, setToUnit] = useState("Kilometers");
  const [inputValue, setInputValue] = useState("");
  const [convertedValue, setConvertedValue] = useState(null);
  const [fromTimeZone, setFromTimeZone] = useState("UTC");
  const [toTimeZone, setToTimeZone] = useState("Asia/Kolkata");

  const handleConversion = () => {
    if (unitType === "datetime") {
      try {
        const date = new Date(inputValue);
        const zonedDate = date;//utcToZonedTime(date, toTimeZone);
        const formattedDate = format(zonedDate, "dd MMM yyyy HH:mm:ssXXX", { timeZone: toTimeZone });
        setConvertedValue(formattedDate);
      } catch {
        setConvertedValue("Invalid date/time input");
      }
    } else {
      if (!inputValue || isNaN(inputValue)) return;

      const value = parseFloat(inputValue);
      const conversion = conversionFactors[unitType][fromUnit][toUnit];

      const result = typeof conversion === "function" ? conversion(value) : value * conversion;
      setConvertedValue(result);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto" }}>
      <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Unit Converter
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 item size={{xs:12}}>
              <TextField
                select
                fullWidth
                label="Unit Type"
                value={unitType}
                onChange={(e) => {
                  setUnitType(e.target.value);
                  if (e.target.value === "datetime") {
                    setFromUnit("");
                    setToUnit("");
                  } else {
                    setFromUnit(unitTypes[e.target.value][0]);
                    setToUnit(unitTypes[e.target.value][1]);
                  }
                }}
              >
                {Object.keys(unitTypes).map((type) => (
                  <MenuItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </MenuItem>
                ))}
              </TextField>
            </Grid2>

            {unitType === "datetime" ? (
              <>
                <Grid2 item size={{xs:6}}>
                  <TextField
                    select
                    fullWidth
                    label="From Time Zone"
                    value={fromTimeZone}
                    onChange={(e) => setFromTimeZone(e.target.value)}
                  >
                    {timeZones.map((zone) => (
                      <MenuItem key={zone} value={zone}>
                        {zone}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid2>
                <Grid2 item size={{xs:6}}>
                  <TextField
                    select
                    fullWidth
                    label="To Time Zone"
                    value={toTimeZone}
                    onChange={(e) => setToTimeZone(e.target.value)}
                  >
                    {timeZones.map((zone) => (
                      <MenuItem key={zone} value={zone}>
                        {zone}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid2>
                <Grid2 item size={{xs:12}}>
                  <TextField
                    fullWidth
                    label="Date/Time (YYYY-MM-DD HH:mm:ss)"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </Grid2>
              </>
            ) : (
              <>
                <Grid2 item size={{xs:6}}>
                  <TextField
                    select
                    fullWidth
                    label="From Unit"
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value)}
                  >
                    {unitTypes[unitType].map((unit) => (
                      <MenuItem key={unit} value={unit}>
                        {unit}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid2>
                <Grid2 item size={{xs:6}}>
                  <TextField
                    select
                    fullWidth
                    label="To Unit"
                    value={toUnit}
                    onChange={(e) => setToUnit(e.target.value)}
                  >
                    {unitTypes[unitType].map((unit) => (
                      <MenuItem key={unit} value={unit}>
                        {unit}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid2>
                <Grid2 item size={{xs:12}}>
                  <TextField
                    fullWidth
                    label="Value to Convert"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </Grid2>
              </>
            )}

            <Grid2 item size={{xs:12}}>
              <Button fullWidth variant="contained" onClick={handleConversion}>
                Convert
              </Button>
            </Grid2>

            {convertedValue !== null && (
              <Grid2 item size={{xs:12}}>
                <Typography variant="h6" align="center">
                  Converted Value: {convertedValue}
                </Typography>
              </Grid2>
            )}
          </Grid2>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UnitConverter;
