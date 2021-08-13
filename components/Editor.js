import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/paraiso-dark.css'
import CodeMirror from 'react-codemirror'
import React from 'react'

let modeLoaded = false
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  require('codemirror/mode/javascript/javascript')
  require('codemirror/mode/clike/clike')
  require('codemirror/mode/xml/xml')
  require('codemirror/mode/css/css')
  require('codemirror/mode/python/python')
  modeLoaded = true
}

// const [answer, setAnswer] = React.useState(undefined);

// export function Compiler() {
//         const [code, setCode] = React.useState(new String(value));
//         setCode(eval(code));
//         setAnswer(code)
//         return console.log(answer)
// }


//////////////////////////////////////////////////////////////

export const JsEditor = (props) => {

    const [value, setValue] = React.useState(undefined);
    console.log("Value in event handler: ", value);
   
    const options = {
        theme: 'paraiso-dark',
        lineNumbers: true,
        autoCloseTags: true,
        identWithTabs: true,
        spellcheck: true,
        autocorrect: true,
    }
  if (modeLoaded) options.mode = 'javascript'

  return (
    <CodeMirror
      className={props.css}
      value={props.children}
      options={options}
      onChange={(target) =>setValue(target)}
      onClick={props.onClick}
    />
  )
}

///////////////////////////////////////////////////////

export const CSharpEditor = (props) => {

    const [value, setValue] = React.useState(undefined);
    console.log("Value in event handler: ", value);

    const options = {
      theme: 'paraiso-dark',
      lineNumbers: true,
      autoCloseTags: true,
      identWithTabs: true,
      spellcheck: true,
      autocorrect: true,
    }
    if (modeLoaded) options.mode = 'x-csharp (C#)'
  
    return (
      <CodeMirror
        className={props.css}
        value={props.children}
        options={options}
        onChange={(target) =>setValue(target)}
      />
    )
  }

/////////////////////////////////////////////////////////

  export const XmlEditor = (props) => {

    const [value, setValue] = React.useState(undefined);
    console.log("Value in event handler: ", value);

    const options = {
      theme: 'paraiso-dark',
      lineNumbers: true,
      autoCloseTags: true,
      identWithTabs: true,
      spellcheck: true,
      autocorrect: true,
    }
    if (modeLoaded) options.mode = 'xml'
  
    return (
      <CodeMirror
        className={props.css}
        value={props.children}
        options={options}
        onChange={(target) =>setValue(target)}
      />
    )
  }

  /////////////////////////////////////////////

  export const CssEditor = (props) => {

    const [value, setValue] = React.useState(undefined);
    console.log("Value in event handler: ", value);

    const options = {
      theme: 'paraiso-dark',
      lineNumbers: true,
      autoCloseTags: true,
      identWithTabs: true,
      spellcheck: true,
      autocorrect: true,
    }
    if (modeLoaded) options.mode = 'css'
  
    return (
      <CodeMirror
        className={props.css}
        value={props.children}
        options={options}
        onChange={(target) =>setValue(target)}
      />
    )
  }

  ///////////////////////////////////////////////

  export const PythonEditor = (props) => {

    const [value, setValue] = React.useState(undefined);
    console.log("Value in event handler: ", value);

    const options = {
      theme: 'paraiso-dark',
      flattenspans: false,
      lineNumbers: true,
      autoCloseTags: true,
      identWithTabs: true,
      spellcheck: true,
      autocorrect: true,
      tabsize: 2,
      smartindent: true,
      matchbrackets: true, // match symbols
      linewisecopycut: true,
      electricchars: true,
      autoclosebackets: true,
      foldgutter: true,
      keymap: 'sublime',
    }
    if (modeLoaded) options.mode = 'python'
  
    return (
      <CodeMirror
        className={props.css}
        value={props.children}
        options={options}
        onChange={(target) =>setValue(target)}
      />
    )
  }