# Contributing Guidelines

## Common
### Commit Style
We generally follow simple plain-English commit titles and summaries, which encapsulate what a commit has done. We don't use a distinct commit style like that of the Linux Kernel for any commits and they would look extremely out of place in the repository overall.

In addition, we stick to a single objective with one commit albeit ensure that the scope isn't too small so there'll be a huge amount of them or too large so it's a single commit that changes vast swaths of the codebase. Try to find the right balance between committing too less and too much.

### Use line-wrapping
There is no column limit in the codebase, this is so that the line width can adjust to everyone's display size using line-wrap. Do not manually wrap lines unless it can be done in a natural way and is needed at all, let line-wrap handle it for you.

### Use code formatter
Visual Studio Code comes with a code formatter in-built, this can fix minor mistakes in code-style. To reformat code: 

- On Windows Shift + Alt + F.
- On Mac Shift + Option + F.
- On Linux Ctrl + Shift + I.

### Comments
Only add comments if there is a workaround or some nonstandard code being used. Discretion of what constitutes nonstandard is up to the author. 
* Use // in order to explain a section
* If there is a need for a file wide comment, use the multiline comment /**/

### Naming rules
* Images: Extremely brief names, try to keep within 3-4 characters.
* Directories: One word, lowercase.
* Components or Sections: PascalCase.
* Pages: SnakeCase.
* JS Variables: CamelCase.
* JS Methods: CamelCase.

### Spacing
Only space JSX apart from each other if there is a clear readability benefit to it **AND** a comment required in order for other contributors to understand. JSX can be lengthy so no spacing is ideal.
