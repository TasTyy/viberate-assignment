import { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import { IMostPopular, IGraphData } from "../api/Interfaces";

interface Props {
    mostPopularIn: IMostPopular[] | undefined;
}

export default function Graph({ mostPopularIn }: Props) {
    const [graphData, setGraphData] = useState<IGraphData[]>([]);

    useEffect(() => {
        function formatGraphData() {
            const formattedData: IGraphData[] = [];
            mostPopularIn?.forEach((country, index) => {
                const hue = Math.round((index * 360) / mostPopularIn.length);
                const color = `hsl(${hue}, 70%, 50%)`;

                formattedData.push({
                    id: country.city,
                    label: country.city,
                    value: Number(country.value),
                    color,
                });
            });
            setGraphData(formattedData);
        }
        formatGraphData();
    }, [mostPopularIn]);

    return (
        <>
            <ResponsivePie
                data={graphData}
                margin={{ top: 50, right: 100, bottom: 50, left: 100 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.2]],
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                }}
                defs={[
                    {
                        id: "dots",
                        type: "patternDots",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.3)",
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: "lines",
                        type: "patternLines",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.3)",
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
            />
        </>
    );
}
