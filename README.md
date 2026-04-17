# Definição formal do sistema

## 1. Estrutura inicial

Você começa com uma matriz fixa:

* Dimensão: $`R \times C`$ (no seu caso, $`6 \times 5`$)
* Preenchida com o alfabeto em ordem

$$
M_0 =
\begin{bmatrix}
A & B & C & D & E \\
F & G & H & I & J \\
K & L & M & N & O \\
P & Q & R & S & T \\
U & V & W & X & Y \\
Z & \varnothing & \varnothing & \varnothing & \varnothing
\end{bmatrix}
$$
## 2. Palavra como vetor de índices

Dada uma palavra de tamanho ($`n`$):

$$
W = (w_1, w_2, ..., w_n)
$$

Cada letra ($`w_i`$) é mapeada para:

* uma posição $`(r_i, c_i)`$ na matriz $`M_0`$

Você **não usa diretamente a letra**, apenas a coluna:

$$
P^{(1)} = (c_1, c_2, ..., c_n)
$$

Esse vetor é o primeiro “prompt”.

## 3. Operação fundamental (transformação)

Cada rodada aplica a mesma transformação:

### Entrada:

* Matriz $`M_k`$ de dimensão $`n \times C`$
* Vetor de colunas $`P^{(k)} = (p_1, ..., p_n)`$

### Saída:

Nova matriz $`M_{k+1}`$

## 4. Regra de transformação

A transformação é:

> Para cada índice $`i \in [1, n]`$, a linha $`i`$ da nova matriz é a coluna $`p_i`$ da matriz anterior.

Formalmente:

$$
M_{k+1}[i, j] = M_k[j, p_i]
$$

Ou seja:

* você pega a coluna $`p_i`$
* transforma ela em linha $`i`$

## 5. Estrutura matricial

Essa operação é equivalente a:

* uma **transposição parcial guiada**
* com **reindexação por vetor**

Cada passo aplica uma função:

$$
M_{k+1} = T_{P^{(k)}}(M_k)
$$

onde $`T`$ é um operador de seleção de colunas seguido de reorganização em linhas.

## 6. Atualização do vetor de controle

Após cada transformação:

* você observa onde cada letra $`w_i`$ está na nova matriz
* extrai suas colunas novamente

$$
P^{(k+1)} = (\text{coluna de } w_1, ..., \text{coluna de } w_n \text{ em } M_k)
$$

## 7. Dinâmica do sistema

O sistema completo é:

$$
M_{k+1}[i, j] = M_k[j, P^{(k)}_i]
$$

$$
P^{(k+1)}_i = \text{coluna onde } w_i \text{ aparece em } M_k
$$

# 🔁 Interpretação estrutural

Esse processo cria:

### 1. Redundância controlada

* Linhas podem se repetir
* Isso preserva informação (não há perda)

### 2. Propagação da informação

* A posição de cada letra influencia a matriz inteira nas iterações seguintes

### 3. Acoplamento global

* Cada escolha afeta todas as linhas futuras

# 📉 Por que há convergência

A convergência ocorre porque:

### 1. Espaço de estados finito

* Número total de matrizes possíveis é limitado

### 2. Sistema determinístico

* Mesma entrada → mesma saída

### 3. Redução de entropia estrutural

A cada passo:

* padrões iguais se multiplicam
* diferenças incompatíveis desaparecem

## 🔒 Invariante importante

A seguinte propriedade é preservada:

> A trajetória de cada letra $`w_i`$ ao longo das matrizes é consistente com o vetor de escolhas.

Ou seja:

* nenhuma transformação “perde” a informação da palavra
* ela apenas redistribui

# 📐 Resultado final

Após $`n`$ iterações:

* a matriz entra em um estado onde:

  * existe **uma única configuração compatível com todas as escolhas**
* a palavra aparece tipicamente:

  * na diagonal principal
  * ou em uma estrutura equivalente (dependendo da implementação)

# 🧩 Interpretação matemática

### 1. Sistema dinâmico discreto

* estado: matriz $`M_k`$
* transição: $`T_{P^{(k)}}`$

### 2. Codificação iterativa

* a palavra é codificada como sequência de projeções

### 3. Operador não linear com memória

* depende do estado anterior + vetor derivado dele

---

# 🔥 Essência técnica (resumo)

* A palavra não é “descoberta”
* Ela é **codificada como uma sequência de índices**
* O sistema aplica **transformações determinísticas que propagam essa informação**
* A redundância garante que:

  * múltiplos caminhos inconsistentes colapsem
* O sistema converge para:

  * uma única configuração compatível com todas as restrições impostas