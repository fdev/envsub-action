# Environment Substitute Action 🧑‍🏫

File-level environment variable substitution using [envsub](https://github.com/danday74/envsub) that works with any format (HTML, JSON, etc.) and supports [multiple syntaxes](#Supported syntaxes).


## Usage

```yaml
- uses: fdev/envsub-action@v1
  with:
    templateFile: ./template.json
    outputFile: ./output.json
  env:
    MYVAR1: foo
    MYVAR2: bar
```

For a detailed explanation on the behavior, restrictions and example usage please read the [documentation of envsub](https://github.com/danday74/envsub#readme).


## Inputs

| Name           | Description                                                                             | Default       |      Required      |
|----------------|-----------------------------------------------------------------------------------------|---------------|:------------------:|
| `templateFile` | Template file containing environment variable placeholders.                             |               | :heavy_check_mark: |
| `outputFile`   | Output file where the result should be written (leave empty to overwrite templateFile). |               |        :x:         |
| `protect`      | Don't substitute non-existent environment variable placeholders.                        |               |        :x:         |
| `syntax`       | Environment variable placeholder [syntax](#Supported syntaxes).                         | `dollar-both` |        :x:         |


### Supported syntaxes

| Name           | Syntax                  |
|----------------|-------------------------|
| `dollar-basic` | `$MYVAR`                |
| `dollar-curly` | `${MYVAR}`              |
| `dollar-both`  | `$MYVAR` and `${MYVAR}` |
| `handlebars`   | `{{MYVAR}}`             |
