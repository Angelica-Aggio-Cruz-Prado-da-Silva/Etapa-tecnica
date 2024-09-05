# Questão 3

import json

with open('dados-1.json') as file:
    data = json.load(file)

faturamento_filtrado = [item['valor'] for item in data if item['valor'] > 0]

menor_valor = min(faturamento_filtrado)
maior_valor = max(faturamento_filtrado)

media_faturamento = sum(faturamento_filtrado) / len(faturamento_filtrado)

dias_acima_da_media = sum(1 for item in faturamento_filtrado if item > media_faturamento)

print(f"Menor valor de faturamento: {menor_valor}")
print(f"Maior valor de faturamento: {maior_valor}")
print(f"Média de faturamento (excluindo dias com faturamento zero): {media_faturamento}")
print(f"Número de dias com faturamento acima da média: {dias_acima_da_media}")