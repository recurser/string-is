# string-is

![eslint](https://github.com/recurser/string-is/actions/workflows/eslint.yml/badge.svg)
![jest](https://github.com/recurser/string-is/actions/workflows/jest.yml/badge.svg)
![build](https://github.com/recurser/string-is/actions/workflows/build.yml/badge.svg)

[string.is](https://www.string.is/) is an open-source, privacy-friendly toolkit for developers. You can see it in action [here](https://www.string.is/).

![Screenshot](src/images/screenshot.png)


## Running locally

Install dependencies:

```bash
yarn install
```

Then run the development server:

```bash
yarn dev
```

... and then open [http://localhost:3000](http://localhost:3000) in your browser.

To run all linting checks, type checks, tests, and build for production:

```bash
yarn all
```


## Adding a new format

1. Decide what formats you are converting *from* and *to*. As an example, let's pretend you are writing a converter *from* plain text *to* reversed-text.
2. Check that there is an `identity` (under [src/lib/identities](https://github.com/recurser/string-is/tree/develop/src/lib/identities)) for the *from* format. In this case we are converting from plain text, and we already have a [PlainIdentity](https://github.com/recurser/string-is/tree/develop/src/lib/identities/PlainIdentity.ts), so we don't need to add a new identity. An `identity` should export (a) a `confidence` function which, given an input string, returns a number out of 100 describing the confidence that the given input matches the identity, and (b) an array of `converters` that the identity can be used with.
3. If you added a new `identity` in step (2), make sure to export it in [src/lib/identities/index.ts](https://github.com/recurser/string-is/tree/develop/src/lib/identities/index.ts).
4. Check that there is an `output` (under [src/lib/outputs](https://github.com/recurser/string-is/tree/develop/src/lib/outputs)) for the *to* format. An output should should export an `output` function which, given an input string (or possibly object, depending on the conversion taking place) and an `options` object, will convert the input into the desired output string.
5. If you added a new `output` in step (4), make sure to export it in [src/lib/outputs/index.ts](https://github.com/recurser/string-is/tree/develop/src/lib/outputs/index.ts).
6. Add a new `converter` (under [src/lib/converters](https://github.com/recurser/string-is/tree/develop/src/lib/converters)) for the `input` + `output` combination. A converter should export (a) an `operation` function which passes the input string and an `options` object to the appropriate `output`, and (b) an `outputId`, which identifies which output is being used (this is needed later to decide which component to render to display the conversion).
7. If you added a new `converter` in step (6), make sure to export it in [src/lib/converters/index.ts](https://github.com/recurser/string-is/tree/develop/src/lib/converters/index.ts).
8. If you defined a new `outputId` in step (6), add a React output component (under [src/components/domain/convert/outputs](https://github.com/recurser/string-is/tree/develop/src/components/domain/convert/outputs)) to render the new kind of output. If you are re-using an existing kind of output (eg. converting to JSON or YAML) you can re-use an existing output component here.
9. If you added a new React component in step (8), make sure to export it in [src/components/domain/convert/outputs](https://github.com/recurser/string-is/tree/develop/src/components/domain/convert/outputs/index.ts).

If all of the appropriate `inputs`, `outputs`, `converters` and React components are in place and exported correctly, you should be able to use your new converter, given the appropriate input string that triggers a non-zero `confidence`.


## Deployment

The easiest way to deploy string.is is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js).

Check out their [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Analytics

string.is includes support for [Plausible Analytics](https://plausible.io/), a privacy-friendly, cookie-less analytics service. To enable it, set an environment variable specifying the domain:

```
NEXT_PUBLIC_ANALYTICS_DOMAIN=string.is
```

Analytics is disabled by default unless `process.env.NODE_ENV === 'production'` and a `NEXT_PUBLIC_ANALYTICS_DOMAIN` domain is set.


## Contributing

Once you've made your changes:

1. [Fork](http://help.github.com/fork-a-repo/) string-is
2. Create a topic branch - `git checkout -b feature/add-my-new-converter`
3. Push to your branch - `git push origin feature/add-my-new-converter`
4. Create a [Pull Request](http://help.github.com/pull-requests/) from your branch
5. That's it!


## Author

[@davemetrics](http://twitter.com/davemetrics)


## Licensing

See the [LICENSE](https://github.com/recurser/string-is/blob/develop/LICENSE) for details.
