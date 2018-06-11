# draft-js-select-image-plugin
Embed a local image in your draft-js editor

*This is a plugin for `draft-js-plugins-editor`.*

## Installation
```
npm install @jimmycode/draft-js-select-image-plugin
```

## Usage
This plugin exposes a button that integrates with the side toolbar.

```js
import createSelectImagePlugin from '@jimmycode/draft-js-select-image-plugin';
const selectImagePlugin = createSelectImagePlugin({});
const { SelectImageButton } = selectImagePlugin;
```

## Configuration
| Param     | Default | Description                                                                                                  |
|-----------|---------|--------------------------------------------------------------------------------------------------------------|
| imageType | IMAGE   | Type of entity created when inserting the atomic block. By default it's the same value as `draft-js-image-plugin` |

## Integration
Rendering the image is out of scope, but in the following example you can see how to integrate `draft-js-image-plugin`.

```
npm install draft-js-image-plugin
```

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import BlockTypeSelect from 'draft-js-side-toolbar-plugin/lib/components/BlockTypeSelect';
import createImagePlugin from 'draft-js-image-plugin';
import createSelectImagePlugin from '@jimmycode/draft-js-select-image-plugin';

import 'draft-js-side-toolbar-plugin/lib/plugin.css';
import 'draft-js-image-plugin/lib/plugin.css';

const imagePlugin = createImagePlugin();
const selectImagePlugin = createSelectImagePlugin();
const DefaultBlockTypeSelect = ({ getEditorState, setEditorState, theme }) => (
  <BlockTypeSelect
    getEditorState={getEditorState}
    setEditorState={setEditorState}
    theme={theme}
    structure={[ 
      selectImagePlugin.SelectImageButton
    ]}
  />
);
const sideToolbarPlugin = createSideToolbarPlugin({
  structure: [DefaultBlockTypeSelect],
});
const { SideToolbar } = sideToolbarPlugin;

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.plugins = [
      sideToolbarPlugin,
      imagePlugin
    ];
  }

  onChange = (editorState) => {
    this.setState({ editorState });
  }

  render() {
    return (
      <div className="editor">
        <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={this.plugins}
            placeholder="Tell a story" />
        <SideToolbar />
      </div>
    );
  }
}

ReactDOM.render(<MyEditor />, document.getElementById('root'));
```

# Acknowledge
* Icon by: https://www.iconfinder.com/icons/290132/gallery_image_photo_photography_picture_pictures_icon
