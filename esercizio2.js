//Here are the commands executed in the terminal for the exercise:
$ node
Welcome to Node.js v20.9.0.
Type ".help" for more information.
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
> const crypto = require('crypto');
undefined
> Object.keys(crypto)
[
  'checkPrime',
  'checkPrimeSync',
  'createCipheriv',
  'createDecipheriv',
  'createDiffieHellman',
  'createDiffieHellmanGroup',
  'createECDH',
  'createHash',
  'createHmac',
  'createPrivateKey',
  'createPublicKey',
  'createSecretKey',
  'createSign',
  'createVerify',
  'diffieHellman',
  'generatePrime',
  'generatePrimeSync',
  'getCiphers',
  'getCipherInfo',
  'getCurves',
  'getDiffieHellman',
  'getHashes',
  'hkdf',
  'hkdfSync',
  'pbkdf2',
  'pbkdf2Sync',
  'generateKeyPair',
  'generateKeyPairSync',
  'generateKey',
  'generateKeySync',
  'privateDecrypt',
  'privateEncrypt',
  'publicDecrypt',
  'publicEncrypt',
  'randomBytes',
  'randomFill',
  'randomFillSync',
  'randomInt',
  'randomUUID',
  'scrypt',
  'scryptSync',
  'sign',
  'setEngine',
  'timingSafeEqual',
  'getFips',
  'setFips',
  'verify',
  'Certificate',
  'Cipher',
  'Cipheriv',
  'Decipher',
  'Decipheriv',
  'DiffieHellman',
  'DiffieHellmanGroup',
  'ECDH',
  'Hash',
  'Hmac',
  'KeyObject',
  'Sign',
  'Verify',
  'X509Certificate',
  'secureHeapUsed',
  'constants',
  'webcrypto',
  'subtle',
  'getRandomValues'
]
> const randomBytes = crypto.randomBytes(16);
undefined
> const randomID = randomBytes.toString('hex');
undefined
> console.log(randomID)
3095e27088c83633845370771661e025