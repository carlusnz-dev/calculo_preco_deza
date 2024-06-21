def calcular_fator(quantidade, area, fator_base, a, b):
    return fator_base * (area ** (-a)) * (quantidade ** (-b))

def calcular_preco_total(qnt, med_x, med_y, fator_base, a, b):
    # Calcula a área de um adesivo
    area = med_x * med_y
    # Calcula o fator ajustado
    fator = fator_base
    # Calcula o preço unitário do adesivo
    preco_unitario = area * fator
    # Calcula o valor total do pedido
    valor_total = qnt * preco_unitario
    return preco_unitario, valor_total

# Valores de exemplo
qnt = float(input("Digite a quantidade de adesivos: "))
med_x = float(input("Digite a medida x do adesivo: ")) / 100
med_y = float(input("Digite a medida y do adesivo: ")) / 100
a = 0.5
b = 0.4
fator_base = calcular_fator(qnt, med_x * med_y, 100, a, b)

preco_unitario, valor_total = calcular_preco_total(qnt, med_x, med_y, fator_base, a, b)

if fator_base < 0:
    print("Erro: Fator ajustado negativo")
    exit(1)

print(f"Fator ajustado: R$ {fator_base:.2f}")
print(f"Preço unitário: R$ {preco_unitario:.2f}")
print(f"Valor total: R$ {valor_total:.2f}")
