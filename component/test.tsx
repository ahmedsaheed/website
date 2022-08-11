import "react-cmdk/dist/cmdk.css";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import { useState } from "react";
import Theme from "./theme"
import {SearchButton} from "./searchButton"


const Example = () => {
  const [page, setPage] = useState<"root" | "projects">("root");
  const [open, setOpen] = useState<boolean>(true);
  const [search, setSearch] = useState("");
  const [click, setClick] = useState<boolean>(false);

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
            icon: "CollectionIcon",
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
            icon: "CodeIcon",
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
            children: "Log out",
            icon: "LogoutIcon",
            onClick: () => {
              alert("Logging out...");
            },
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

export default Example;