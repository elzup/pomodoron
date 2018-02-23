# pomodoron [![Build Status](https://travis-ci.org/elzup/pomodoron.svg?branch=master)](https://travis-ci.org/elzup/pomodoron)

> Pomodoro timer with open


## Install

```
$ npm install pomodoron
```


## Usage

```js
const pomodoron = require('pomodoron');

pomodoron('unicorns');
//=> 'unicorns & rainbows'
```


## API

### pomodoron(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global pomodoron
```

```
$ pomodoron --help

  Usage
    pomodoron [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ pomodoron
    unicorns & rainbows
    $ pomodoron ponies
    ponies & rainbows
```


## License

MIT © [elzup](https://elzup.com)
