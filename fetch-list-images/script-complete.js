function onTextReady(text) {
  const urls = text.split('\n');
  for (const url of urls) {
    const image = new Image();
    image.src = url;
    document.body.append(image);
  }
}

function onResponse(response) {
  return response.text();
}

fetch('images.txt')
    .then(onResponse)
    .then(onTextReady);
