const createHash = require('create-hash')
const secp256k1 = require('secp256k1')

/**
 * sha256
 */
exports.sha256 = (str) => {
  return createHash('sha256')
    .update(str)
    .digest()
}

/**
 * 签名方法
 */
exports.ecsign = (msgHash, privateKey) => {
  let sig = secp256k1.sign(msgHash, privateKey)
  let ret = {
    r: sig.signature.slice(0, 32),
    s: sig.signature.slice(32, 64)
  }
  return ret
}

/**
 * privateKey to publicKey
 */
exports.privateToPublic = function (privateKey) {
  privateKey = Buffer.from(privateKey)
  return secp256k1.publicKeyCreate(privateKey, false).slice(1)
}
