import { ImageList, ImageListItem } from "@mui/material";

const PhotoGallery = ({ photos }) => {
  const srcset = (image: string, size: number, rows = 1, cols = 1) => ({
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  });

  return (
    <ImageList
      sx={{ width: "100%", height: "100%" }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {photos.map(({ rows, cols, img }, i) => (
        <ImageListItem key={i} cols={cols} rows={rows}>
          <img {...srcset(img, 121, rows, cols)} alt={i} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PhotoGallery;
