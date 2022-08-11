import "react-cmdk/dist/cmdk.css";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import { useState } from "react";

const Example = () => {
  const [page, setPage] = useState<"root" | "projects">("root");
  const [open, setOpen] = useState<boolean>(true);
  const [search, setSearch] = useState("");
  const [click, setClick] = useState<boolean>(false);

  const filteredItems = filterItems(
    [
      {
        heading: "Home",
        id: "home",
        items: [
          {
            id: "home",
            children: "Home",
            icon: "HomeIcon",
            href: "/",
          },
          {
            id: "settings",
            children: "Settings",
            icon: "CogIcon",
            href: "#",
          },
          {
            id: "projects",
            children: "Projects",
            icon: "CollectionIcon",
            closeOnSelect: false,
            onClick: () => {
              setPage("projects");
            },
          },
        ],
      },
      {
        heading: "Other",
        id: "advanced",
        items: [
          {
            id: "developer-settings",
            children: "Developer settings",
            icon: "CodeIcon",
            href: "#",
          },
          {
            id: "privacy-policy",
            children: "Privacy policy",
            icon: "SupportIcon",
            href: "#",
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

cmdk
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