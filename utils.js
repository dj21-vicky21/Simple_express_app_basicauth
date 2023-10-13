require("dotenv").config(); 
const { SOURCE } = process.env

function generatejson(statusCode, msg) {
    let response = {
      status: statusCode,
    };

    if (statusCode >= 200 && statusCode < 300) {
      response.result = msg;
      response.message = 'Success';
    } else if (statusCode >= 300 && statusCode < 600) {
      response.error = msg;
      response.message = 'Error';
    } else {
      response.message = 'Unknown status code';
    }
    return response;
  }

const checkSourceHeader = (req, res, next) => {
const sourceHeader = req.get('Source');
// Check if the "Source" header exists
if (sourceHeader == SOURCE) {
    next(); // Proceed to the next middleware or route handler
} else {
    const data = generatejson(403,'Forbidden: "Source" header is missing')
    // If the "Source" header is missing, respond with an error
    res.status(403).send(data);
}
};


function responseApi(req, res,code = 500,result = 'Something went wrong!'){
    if(code == 200){
        result = 'yes here the data'
    }
    res.status(code).send(generatejson(code,result));
}

module.exports = {generatejson,responseApi,checkSourceHeader}