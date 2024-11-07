import PageSectionColumn from "@/components/common/PageSectionColumn";
import theme from "@/styles/theme";

import Text from "../common/Text";

export interface data {
  title: any;
  start?: any;
  points?: any[];
  end?: any;
}

const Consents = ({ contents }: { contents: data[] }) => {
  return contents.map(({ title, start, points, end }: data, i: number) => (
    <PageSectionColumn key={i}>
      <Text color={theme.palette.blue.dark} bold variant="cardTitle">
        {title}
      </Text>

      {start && (
        <Text color={theme.palette.blue.dark} justify doubleHeight>
          {start}
        </Text>
      )}

      {points?.map((point, y) => (
        <Text color={theme.palette.blue.dark} justify doubleHeight key={y}>
          {"- " + point}
        </Text>
      ))}

      {end && (
        <Text color={theme.palette.blue.dark} justify doubleHeight>
          {end}
        </Text>
      )}
    </PageSectionColumn>
  ));
};

export default Consents;
