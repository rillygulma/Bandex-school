import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import Text from "../common/Text";
import Link from "next/link";

export const latestNews = [
  {
    title: "News.LatestNews.News1.Title",
    description: [
      "News.LatestNews.News1.Para1",
      "News.LatestNews.News1.Para2",
      "News.LatestNews.News1.Para3",
    ],
    src: "/landingPage/news1.jpg",
    date: "29/4/2019",
  },
  {
    title: "News.LatestNews.News2.Title",
    description: [
      "News.LatestNews.News2.Para1",
      "News.LatestNews.News2.Para2",
      "News.LatestNews.News2.Para3",
    ],
    src: "/landingPage/news2.jpg",
    date: "29/4/2019",
  },
  {
    title: "News.LatestNews.News3.Title",
    description: [
      "News.LatestNews.News3.Para1",
      "News.LatestNews.News3.Para2",
      "News.LatestNews.News3.Para3",
    ],
    src: "/landingPage/news3.jpg",
    date: "29/4/2019",
  },
];

const NewsSection = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <PageSection>
      {latestNews.map((item, i) => (
        <PageSectionColumn md={6} key={i}>
          <Avatar
            variant="square"
            src={item.src}
            sx={{
              width: "100%",
              height: "auto",
            }}
            onClick={(e) => {
              e.preventDefault(); // Prevent default behavior
            }}
          />
          <Text color={theme.palette.blue.dark} variant="cardTitle" center>
            {t(item.title)}
          </Text>

          <Text color={theme.palette.blue.dark}>{item.date}</Text>

          <Text variant="p" justify>
            {item.description
              .map((desc) => t(desc))
              .join(". ")
              .slice(0, 110)}
            {"..."}
          </Text>

          {/* Wrapping Text in <a> for Link behavior */}
          <Link
            href={`/news/${t(item.title).replace(/\s/g, "_")}`}
            passHref
          >
            <a>
              <Text variant="p" color={theme.palette.blue.dark}>
                {t("News.ReadMore")}
              </Text>
            </a>
          </Link>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default NewsSection;
