function params () {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Access-Control-Allow-Origin', '*')

  return {
    method: 'GET',
    headers
  }
}

const data = {
  states () {
    return [
      {"nome": "Acre", "sigla": "AC"},
      {"nome": "Alagoas", "sigla": "AL"},
      {"nome": "Amapá", "sigla": "AP"},
      {"nome": "Amazonas", "sigla": "AM"},
      {"nome": "Bahia", "sigla": "BA"},
      {"nome": "Ceará", "sigla": "CE"},
      {"nome": "Distrito Federal", "sigla": "DF"},
      {"nome": "Espírito Santo", "sigla": "ES"},
      {"nome": "Goiás", "sigla": "GO"},
      {"nome": "Maranhão", "sigla": "MA"},
      {"nome": "Mato Grosso", "sigla": "MT"},
      {"nome": "Mato Grosso do Sul", "sigla": "MS"},
      {"nome": "Minas Gerais", "sigla": "MG"},
      {"nome": "Pará", "sigla": "PA"},
      {"nome": "Paraíba", "sigla": "PB"},
      {"nome": "Paraná", "sigla": "PR"},
      {"nome": "Pernambuco", "sigla": "PE"},
      {"nome": "Piauí", "sigla": "PI"},
      {"nome": "Rio de Janeiro", "sigla": "RJ"},
      {"nome": "Rio Grande do Norte", "sigla": "RN"},
      {"nome": "Rio Grande do Sul", "sigla": "RS"},
      {"nome": "Rondônia", "sigla": "RO"},
      {"nome": "Roraima", "sigla": "RR"},
      {"nome": "Santa Catarina", "sigla": "SC"},
      {"nome": "São Paulo", "sigla": "SP"},
      {"nome": "Sergipe", "sigla": "SE"},
      {"nome": "Tocantins", "sigla": "TO"}
    ]
  },
  async cities (uf: string) {
    const response = await (await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
      params()
    )).json()

    const cities = []
    for (const key in response) {
      const element = response[key]
      cities.push(element.nome)
    }

    return cities
  },
  async allCities () {
    const ufs = data.states()
    const cities = [] as string[]

    await ufs.forEach(async (uf) => {
      const response = await (await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.sigla}/municipios`,
        params()
      )).json()

      for (const key in response) {
        const element = response[key]
        cities.push(`${element.nome} - ${uf.sigla}`)
      }
    });

    return cities
  }
}

export default defineNuxtPlugin(({ }) => {

  return {
    provide: {
      loc: data
    }
  }
})