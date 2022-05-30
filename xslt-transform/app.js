// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
//const _xslt4node = require("xslt4node");
let response;
const _xslt4node = require("xslt4node");

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.lambdaHandler = async (event, context, callback) => {
    let xsltString;
    try {
        // const ret = await axios(url);
        console.log("****************");
        console.log(event.body);
        console.log("****************");
        let xsltfile="";
         var config = {
         xsltPath: './discount.xsl',
             source: event.body,
         result: String,
         props: {
             indent: 'yes'
         }
        };
        result= xslt4node.transformSync(config);

    console.log(result);
    } catch (err) {
        console.log(err);
        return err;
    }


};

