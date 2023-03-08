// import { Translate } from '@google-cloud/translate';
// import { v4 as uuidv4 } from 'uuid';

// const projectId = 'project-id'; // Google Cloud project ID
// const location = 'global';
// const translate = new Translate({ projectId });

async function translateText(text, sourceLanguage, targetLanguage) {
//   try {
//     const [translation] = await translate.translate(text, {
//       from: sourceLanguage,
//       to: targetLanguage,
//       model: 'nmt',
//     });

//     const [detection] = await translate.detect(text);
//     const id = uuidv4();

//     return {
//       id,
//       sourceLanguage: detection.language,
//       translatedText: translation,
//       targetLanguage,
//     };
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
}

export { translateText };
