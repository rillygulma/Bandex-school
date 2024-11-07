import theme from "@/styles/theme";
import Column from "./Column";
import Row from "./Row";
import Text from "./Text";

interface StaticListProps {
  items: {
    text: string;
    icon: JSX.Element;
  }[];
}

const StaticList = ({
  items,
  color = theme.palette.basic.light,
}: StaticListProps) => {
  return (
    <Row>
      {items?.map(({ icon, text }, i) => (
        <Column lg={2} md={3} sm={4} xs={6} key={i}>
          <Text color={color} center>
            {icon}
          </Text>

          <Text color={color} center>
            {text}
          </Text>
        </Column>
      ))}
    </Row>
  );
};

export default StaticList;
