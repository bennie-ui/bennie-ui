import { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TailwindColor, toHex } from "@bennie-ui/types/colors";
import { useDarkMode } from "@bennie-ui/composition";
import { Card, CardContent } from "@bennie-ui/card";

export type CompositionEntry = {
  date: string;
  [key: string]: string | number;
};

export type LineSeries = {
  key: string;
  name: string;
  color: TailwindColor;
  dashed?: boolean;
};

type CompositionLineChartProperties = {
  data: CompositionEntry[];
  title: string;
  series: LineSeries[];
  dataTestId?: string;
};

const darkTokens = {
  grid:           "#1E1E2E",
  tick:           "#64748B",
  tooltipBg:      "#1C1C27",
  tooltipBorder:  "#2A2A3D",
  tooltipText:    "#E2E8F0",
  legend:         "#94A3B8",
};

const lightTokens = {
  grid:           "#E2E8F0",
  tick:           "#64748B",
  tooltipBg:      "#FFFFFF",
  tooltipBorder:  "#E2E8F0",
  tooltipText:    "#0F172A",
  legend:         "#64748B",
};

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" });

export const CompositionLineChart: FC<CompositionLineChartProperties> = ({ data, title, series, dataTestId }) => {
  const t = useDarkMode() ? darkTokens : lightTokens;

  return (
    <Card title={title} dataTestId={dataTestId}>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={t.grid} vertical={false} />
            <XAxis
              dataKey="date"
              tickFormatter={formatDate}
              tick={{ fill: t.tick, fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              tick={{ fill: t.tick, fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={["auto", "auto"]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: t.tooltipBg,
                border: `1px solid ${t.tooltipBorder}`,
                borderRadius: 8,
                color: t.tooltipText,
                fontSize: 12,
              }}
              labelFormatter={formatDate}
            />
            <Legend wrapperStyle={{ fontSize: 12, color: t.legend, paddingTop: 8 }} />
            {series.map((s) => (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.name}
                stroke={toHex(s.color)}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 3 }}
                {...(s.dashed ? { strokeDasharray: "4 2" } : {})}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
