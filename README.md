<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Mersenne Twister

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> A 32-bit [Mersenne Twister][mersenne-twister] pseudorandom number generator.

<section class="installation">

## Installation

```bash
npm install @stdlib/random-base-mt19937
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var mt19937 = require( '@stdlib/random-base-mt19937' );
```

#### mt19937()

Returns a pseudorandom integer on the interval `[0, 4294967295]`.

```javascript
var r = mt19937();
// returns <number>
```

#### mt19937.normalized()

Returns a pseudorandom number on the interval `[0, 1)` with 53-bit precision.

```javascript
var r = mt19937.normalized();
// returns <number>
```

#### mt19937.factory( \[options] )

Returns a 32-bit [Mersenne Twister][mersenne-twister] pseudorandom number generator.

```javascript
var rand = mt19937.factory();
```

The function accepts the following `options`:

-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: boolean indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

By default, a random integer is used to seed the returned generator. To seed the generator, provide either a nonzero integer on the interval `[1, 4294967295]`

```javascript
var rand = mt19937.factory({
    'seed': 1234
});

var r = rand();
// returns 822569775
```

or, for arbitrary length seeds, an array-like object containing unsigned 32-bit integers

```javascript
var Uint32Array = require( '@stdlib/array-uint32' );

var rand = mt19937.factory({
    'seed': new Uint32Array( [ 291, 564, 837, 1110 ] )
});

var r = rand();
// returns 1067595299
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
// Generate pseudorandom numbers, thus progressing the generator state:
var r;
var i;
for ( i = 0; i < 1000; i++ ) {
    r = mt19937();
}

// Create a new MT19937 PRNG initialized to the current state of `mt19937`:
var rand = mt19937.factory({
    'state': mt19937.state
});

// Test that the generated pseudorandom numbers are the same:
var bool = ( rand() === mt19937() );
// returns true
```

#### mt19937.NAME

The generator name.

```javascript
var str = mt19937.NAME;
// returns 'mt19937'
```

#### mt19937.MIN

Minimum possible value.

```javascript
var min = mt19937.MIN;
// returns 0
```

#### mt19937.MAX

Maximum possible value.

```javascript
var max = mt19937.MAX;
// returns 4294967295
```

#### mt19937.seed

The value used to seed `mt19937()`.

```javascript
// Generate pseudorandom values...
var r;
var i;
for ( i = 0; i < 100; i++ ) {
    r = mt19937();
}

// Generate the same pseudorandom values...
var rand = mt19937.factory({
    'seed': mt19937.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

#### mt19937.seedLength

Length of generator seed.

```javascript
var len = mt19937.seedLength;
// returns <number>
```

#### mt19937.state

Writable property for getting and setting the generator state.

```javascript
var r = mt19937();
// returns <number>

r = mt19937();
// returns <number>

// ...

// Get a copy of the current state:
var state = mt19937.state;
// returns <Uint32Array>

r = mt19937();
// returns <number>

r = mt19937();
// returns <number>

// Reset the state:
mt19937.state = state;

// Replay the last two pseudorandom numbers:
r = mt19937();
// returns <number>

r = mt19937();
// returns <number>

// ...
```

#### mt19937.stateLength

Length of generator state.

```javascript
var len = mt19937.stateLength;
// returns <number>
```

#### mt19937.byteLength

Size (in bytes) of generator state.

```javascript
var sz = mt19937.byteLength;
// returns <number>
```

#### mt19937.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = mt19937.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   [Mersenne Twister][mersenne-twister] is **not** a cryptographically secure PRNG, as the PRNG is based on a linear recursion. Any pseudorandom number sequence generated by a linear recursion is **insecure**, due to the fact that one can predict future generated outputs by observing a sufficiently long subsequence of generated values.
-   Compared to other PRNGs, [Mersenne Twister][mersenne-twister] has a large state size (`~2.5kB`). Because of the large state size, beware of increased memory consumption when using the `factory()` method to create many [Mersenne Twister][mersenne-twister] PRNGs. When appropriate (e.g., when external state mutation is not a concern), consider sharing PRNG state.
-   A seed array of length `1` is considered **equivalent** to an integer seed equal to the lone seed array element and vice versa.
-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).
-   The PRNG has a period of `2^19937 - 1`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var mt19937 = require( '@stdlib/random-base-mt19937' );

// Generate pseudorandom numbers...
var i;
for ( i = 0; i < 100; i++ ) {
    console.log( mt19937() );
}

// Create a new pseudorandom number generator...
var seed = 1234;
var rand = mt19937.factory({
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = mt19937.factory({
    'seed': mt19937.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Matsumoto, Makoto, and Takuji Nishimura. 1998. "Mersenne Twister: A 623-dimensionally Equidistributed Uniform Pseudo-random Number Generator." _ACM Transactions on Modeling and Computer Simulation_ 8 (1). New York, NY, USA: ACM: 3–30. doi:[10.1145/272991.272995][@matsumoto:1998a].
-   Harase, Shin. 2017. "Conversion of Mersenne Twister to double-precision floating-point numbers." _ArXiv_ abs/1708.06018 (September). <https://arxiv.org/abs/1708.06018>.

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random-array/mt19937`][@stdlib/random/array/mt19937]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers generated using a 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="package-name">[`@stdlib/random-iter/mt19937`][@stdlib/random/iter/mt19937]</span><span class="delimiter">: </span><span class="description">create an iterator for a 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="package-name">[`@stdlib/random-streams/mt19937`][@stdlib/random/streams/mt19937]</span><span class="delimiter">: </span><span class="description">create a readable stream for a 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="package-name">[`@stdlib/random-base/minstd`][@stdlib/random/base/minstd]</span><span class="delimiter">: </span><span class="description">A linear congruential pseudorandom number generator (LCG) based on Park and Miller.</span>
-   <span class="package-name">[`@stdlib/random-base/randi`][@stdlib/random/base/randi]</span><span class="delimiter">: </span><span class="description">pseudorandom numbers having integer values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-mt19937.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-mt19937

[test-image]: https://github.com/stdlib-js/random-base-mt19937/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-base-mt19937/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-mt19937/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-mt19937?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-mt19937.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-mt19937/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base-mt19937/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-base-mt19937/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-base-mt19937/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-base-mt19937/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-base-mt19937/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-base-mt19937/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-base-mt19937/blob/main/branches.md

[mersenne-twister]: https://en.wikipedia.org/wiki/Mersenne_Twister

[@matsumoto:1998a]: https://doi.org/10.1145/272991.272995

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/mt19937]: https://github.com/stdlib-js/random-array-mt19937

[@stdlib/random/iter/mt19937]: https://github.com/stdlib-js/random-iter-mt19937

[@stdlib/random/streams/mt19937]: https://github.com/stdlib-js/random-streams-mt19937

[@stdlib/random/base/minstd]: https://github.com/stdlib-js/random-base-minstd

[@stdlib/random/base/randi]: https://github.com/stdlib-js/random-base-randi

<!-- </related-links> -->

</section>

<!-- /.links -->
