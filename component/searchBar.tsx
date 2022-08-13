import "react-cmdk/dist/cmdk.css";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import { useState } from "react";
import Theme from "./theme"
import {SearchButton} from "./searchButton"
import React from "react";
import { useTheme } from "next-themes"



const SearchArea = () => {
  const [page, setPage] = useState<"root" | "projects">("root");
  const [open, setOpen] = useState<boolean>(true);
  const [search, setSearch] = useState("");
  const [click, setClick] = useState<boolean>(false);
  const { theme, setTheme } = useTheme()
  const toggleDarkMode = () => {
      if (theme == "light") {
          setTheme("dark")
      } else {
          setTheme("light")
      }
  }

  const filteredItems = filterItems(
    [
      {
        heading: "Route",
        id: "home",
        items: [
          {
            id: "home",
            children: "Home",
            icon: "HomeIcon",
            href: "/",
          },
          {
            id: "books",
            children: "Books",
            icon: "BookOpenIcon",
            href: "/books",
          },
          {
            id: "writing",
            children: "Writings",
            icon: "DocumentTextIcon",
            href: "/second-brain",
          },
          {
            id: "til",
            children: "Today I Learnt",
            icon: "AcademicCapIcon",
            href: "/TIL",
          },
          {
            id: "projects",
            children: "Projects",
            icon: "CollectionIcon",
            href: "/projects",
          },
          // {
          //   id: "saas",
          //   children: "sasa",
          //   icon: "CollectionIcon",
          //   closeOnSelect: false,
          //   onClick: () => {
          //     <Theme/>;
          //   },
          // },
        ],
      },
      {
        heading: "Connect",
        id: "advanced",
        items: [
          {
            id: "github",
            children: "Github",
            icon:() =>  <GithubIcon/>,
            href: "https://github.com/ahmedsaheed",
          },
          {
            id: "rss",
            children: "RSS",
            icon: "RssIcon",
            href: "/rss/feed.xml",
          },
          {
            id: "log-out",
            children: theme == "light" ? "Dark Mode" : "Light Mode",
            icon: theme === "dark" ? "LightBulbIcon" : "MoonIcon",
            onClick: () => {toggleDarkMode()},
          },
        ],
      },
    ],
    search
  );

  return (
    <div>
      <button onClick={() => setClick(true)}>
        <SearchButton />
</button>

{click && (
<CommandPalette
onChangeSearch={setSearch}
onChangeOpen={setClick}
search={search}
isOpen={open}
page={page}
>
<CommandPalette.Page id="root">
  {filteredItems.length ? (
    filteredItems.map((list) => (
      <CommandPalette.List key={list.id} heading={list.heading}>
        {list.items.map(({ id, ...rest }) => (
          <CommandPalette.ListItem
            key={id}
            index={getItemIndex(filteredItems, id)}
            {...rest}
          />
        ))}
      </CommandPalette.List>
    ))
  ) : (
    <CommandPalette.FreeSearchAction />
  )}
</CommandPalette.Page>

<CommandPalette.Page id="projects">
  {/* Projects page */}
</CommandPalette.Page>
</CommandPalette>

)
}

    </div>
  );
    
  
};

export default SearchArea;

//@ts-ignore
const GithubIcon: React.FC<{}> = () => {

    return(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ display: "inline" }}
        aria-hidden="true"
        role="img"
        className="iconify iconify--uil"
        width="20"
        height="16"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
            fill="#888888"
            d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415a1.2 1.2 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182ZM20.737 5.377a5.39 5.39 0 0 0 .09-.42a6.278 6.278 0 0 0-.408-3.293a1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83a8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.678 1.678 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738a4.258 4.258 0 0 1 .92-2.713a3.022 3.022 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.388 3.388 0 0 1-.155-.555a4.094 4.094 0 0 1 .079-1.616a7.543 7.543 0 0 1 2.415 1.18a1.009 1.009 0 0 0 .827.133a11.777 11.777 0 0 1 6.173.001a1.005 1.005 0 0 0 .83-.138a7.572 7.572 0 0 1 2.406-1.19a4.04 4.04 0 0 1 .087 1.578a3.205 3.205 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311a4.256 4.256 0 0 0-.116-.416a6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826Z"
        ></path>
      </svg>
    )
  
  }
      
    