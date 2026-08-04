# Hospedagem & Eventos

Calculadora web simples para sugerir preços de locação com base nos custos, nas taxas do canal de venda e na margem de lucro desejada.

## Acessar o aplicativo

[Abra a versão publicada do Hospedagem & Eventos](https://lucro-lumiar.bitcoiniciantes.chatgpt.site)

## O que o aplicativo calcula

- preço mínimo para não ter prejuízo;
- preço recomendado para atingir a margem desejada;
- custo total da locação;
- lucro líquido projetado;
- valor por dia e por pessoa;
- impacto das comissões de venda direta, Airbnb e Booking.

## Tipos de locação

### Hospedagem

Permite informar o número de hóspedes e a quantidade de diárias. Os custos podem ser cadastrados por locação, por dia, por pessoa ou por pessoa/dia.

### Espaço para eventos

Permite calcular o preço de um evento com base no número de participantes e na duração. Custos de limpeza, preparação, consumo, estrutura e equipe podem ser ajustados livremente.

## Privacidade

O aplicativo não possui cadastro nem banco de dados. Nenhum valor informado na simulação é armazenado.

## Executar localmente

Requisitos:

- Node.js 22.13 ou mais recente;

Instalação e execução:

```bash
npm install
npm run dev
```

Depois, abra o endereço local indicado no terminal, normalmente `http://localhost:3000`.

Para validar a versão de produção:

```bash
npm run build
```

## Estrutura principal

- `app/page.tsx`: interface e cálculos;
- `app/globals.css`: aparência e adaptação para celular;
- `app/layout.tsx`: título e informações da página.

## Observação

Os resultados são indicativos. Confirme impostos, comissões e demais encargos aplicáveis antes de fechar uma locação.
