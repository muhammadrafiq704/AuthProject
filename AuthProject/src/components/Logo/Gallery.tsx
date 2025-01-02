import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useLocation } from "react-router-dom";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const { pathname } = useLocation();
  console.log("pathname", pathname);

  return (
    <ImageList
      sx={{ width: 300, height: 250 }}
      variant={
        pathname === "/"
          ? "woven"
          : pathname === "/forgot-password"
          ? "quilted"
          : pathname === "/reset-password"
          ? "masonry"
          : undefined
      }
      cols={3}
      rowHeight={121}
    >
      {itemData.map((item) => (
        
        <ImageListItem
          key={item.img}
          cols={ item.cols || 1 }  
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            style={{
              borderRadius: "12px",
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    rows: 1,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    rows: 1,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 1,
  },
];
