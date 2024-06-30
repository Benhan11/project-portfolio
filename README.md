# Project portfolio

## Description
This portfolio was built on a [React](https://react.dev/) + 
[TypeScript](https://www.typescriptlang.org/) tech stack. Here I showcase some
of my personal programming projects, from apps designed for backup of playlists,
to this very portfolio itself.


## Adding a new project
This web app was built in a manner that allows for addition of new content 
without the need of coding, the following steps result in the addition of a new
project page:


### 1. **Add a new project JSON object**

A named (serving as an Id) JSON object should be created in the 
`src/assets/project_page_data.json` file, under `content`. The object should 
be structured as follows:
```JSON
"project-name": {
    "url": "github-url",
    "title": "Project name",
    "data-sections": [
        {
            "title": "Overview",
            "text": "This project was created for ...",
            "imageName": "sectionImage"
        },
        ...
    ],
    "tags": [
        {
            "name": "JavaScript",
            "color": "yellow-500",
            "bgColor": "yellow-950",
            "iconName": "javascriptIcon"
        },
        ...
    ]
}
```
***NOTE*** `imageName`/`iconName` should be the same as the exported image/icon
from the corrseponding scripts, `color` and `bgColor` must be valid [Tailwind
colors.](https://tailwindcss.com/docs/customizing-colors)


### 2. **Add corresponding project snippet JSON object**

A JSON object should be created in the `src/assets/project_snippet_data.json`
file, under `content`. The object should be structured as follows:
```JSON
{
    "title": "Project name",
    "description": "Short description of the project",
    "imageName": "snippetImage",
    "projectId": "project-name"
}
```
***NOTE*** `projectId` should match the name of the JSON object created in the
`project_page_data.json` file.


### 3. **Adding images/icons**

Each section in `data-sections` should have a corresponding image, so to should
each project snippet. Each tag in `tags` should have a corresponding icon.

Images and icons should be added to the `images.ts` and `icons.ts`, following
these steps:

1. Import the image/icon
ex. 
```TypeScript
import hueSnippet from 'assets/images/project-images/hue-lamp-app/snippet.png';
```

2. Export te image/icon
ex.
```TypeScript
const images: ImagesType = {
    ...
    hueSnippet,
    ...
};
```

## Icons
* [Font Awesome](https://fontawesome.com/)
* [Boxicons](https://boxicons.com/)