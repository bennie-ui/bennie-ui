import { FC } from "react";
import { Card, CardHeaderRight, CardContent, CardFooter, CardFooterLeft } from "@bennie-ui/card";
import { Ticker, Unit } from "@bennie-ui/units";
import { Sparkline } from "../sparkline";
import { MetricChartProperties } from "./metric-chart.types";

export const MetricChart: FC<MetricChartProperties> = ({
  label,
  value,
  unit,
  trend,
  sparkline,
  color = "blue.500",
  testId = "metric-chart",
}) => (
  <Card dataTestId={testId} title={label}>
    <CardHeaderRight>
      <Ticker value={trend} />
    </CardHeaderRight>
    <CardContent>
      <Unit value={value} unit={unit} />
    </CardContent>
    <CardFooter>
      <CardFooterLeft>
        <Sparkline data={sparkline} color={color} width={100} height={32} />
      </CardFooterLeft>
    </CardFooter>
  </Card>
);
