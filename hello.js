function main({name}) {
    var msg = 'you did not tell me who you are.';
    if (name) {
      msg = `hello ${name}!`
    }
    return {body: `<html><body><h3>${msg}</h3></body></html>`}
  }