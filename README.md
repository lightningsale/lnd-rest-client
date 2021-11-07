## @

This generator creates TypeScript/JavaScript client that utilizes fetch-api.

Generated with: 
```shell
openapi-generator generate \
-i https://raw.githubusercontent.com/lightningnetwork/lnd/0-13-1-branch/lnrpc/rpc.swagger.json \
-g typescript \
-o ./lnd-rest-api
```
### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @ --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
