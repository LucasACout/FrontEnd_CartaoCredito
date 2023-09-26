function mudar(event) {
  if (event.currentTarget.name == "numero"){
    let elemento = document.getElementById('numero');
    // Codigo
    let cursorPos = event.currentTarget.selectionStart
    let currentValue = event.currentTarget.value
    let cleanValue = currentValue.replace(/\D/g, "");
    // Codigo
    let formatInput = patternMatch({
      input: cleanValue,
      template: "xxxx xxxx xxxx xxxx"
    });
    elemento.innerHTML = formatInput;
    event.currentTarget.value = formatInput;
  }
  //
  if (event.currentTarget.name == "nome"){
    let elemento = document.getElementById('nome');
    //
    let currentValue = event.currentTarget.value;

    let cleanValue = currentValue.replace(/[^A-Za-z ]+/g, "");
    elemento.innerHTML = cleanValue;
    event.currentTarget.value = cleanValue;
  }
  //
  if (["data_mes", "data_ano", "codigo"].includes(event.currentTarget.name)){
    let currentValue = event.currentTarget.value;
    let cleanValue = currentValue.replace(/\D/g, "");
    event.currentTarget.value = cleanValue;
    //
    if((["data_mes", "data_ano"].includes(event.currentTarget.name))){
      let mes = document.getElementById('dm').value;
      let ano = document.getElementById('da').value;
      mes = ("00" + mes).slice(-2);
      ano = ("00" + ano).slice(-2);

      let res = mes + "/" + ano

      document.getElementById('data').innerHTML = res;
    }else{
      let cvv = document.getElementById('cvv');
      cvv.innerHTML = ("000" + cleanValue).slice(-3);
    }
  }
}

function patternMatch({ input, template }) {
  try {
    let j = 0;
    let plaintext = "";
    let countj = 0;
    while (j < template.length) {
      if (countj > input.length - 1) {
        template = template.substring(0, j);
        break;
      }

      if (template[j] == input[j]) {
        j++;
        countj++;
        continue;
      }

      if (template[j] == "x") {
        template =
          template.substring(0, j) + input[countj] + template.substring(j + 1);
        plaintext = plaintext + input[countj];
        countj++;
      }
      j++;
    }

    return template;
  } catch {
    return "";
  }
}