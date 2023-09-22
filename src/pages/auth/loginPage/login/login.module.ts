import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  providers: [],
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}

// O CommonModule no Angular é um módulo que faz parte do Angular Core e é usado para fornecer funcionalidades comuns que são amplamente utilizadas em aplicativos Angular. Ele oferece vários recursos e diretivas que são úteis ao criar componentes e módulos em um aplicativo Angular. Aqui estão algumas das funcionalidades mais importantes fornecidas pelo CommonModule:

// Diretivas comuns: O CommonModule inclui diretivas comuns usadas em aplicativos Angular, como ngIf, ngFor, ngSwitch, etc. Isso significa que você pode usar essas diretivas em seus templates sem a necessidade de importar diretamente módulos individuais.

// Pipes comuns: Ele também disponibiliza pipes comuns, como DatePipe, UpperCasePipe, LowerCasePipe e outros, que podem ser usados para formatar dados em seus templates.

// FormsModule vs. ReactiveFormsModule: O CommonModule é usado em conjunto com o FormsModule ou o ReactiveFormsModule para habilitar recursos de formulário no Angular. Se você estiver trabalhando com formulários template-driven, usará o CommonModule em conjunto com o FormsModule. Se estiver trabalhando com formulários reativos, usará o CommonModule em conjunto com o ReactiveFormsModule.

// NgModel: O CommonModule fornece suporte para a diretiva NgModel, que é usada em formulários template-driven para a vinculação de dados bidirecional.

// Diretiva CommonModule: Você pode usar a diretiva ngClass para adicionar ou remover classes CSS condicionalmente com base em uma expressão.

// Em resumo, o CommonModule é uma parte essencial do ecossistema Angular que fornece funcionalidades comuns usadas em muitos aplicativos. Ele ajuda a simplificar o desenvolvimento e a organização do código, permitindo que você importe essas funcionalidades comuns em seus módulos sem a necessidade de importar várias diretivas e módulos separados.

// O @NgModule é um decorador fundamental no Angular que é usado para configurar e definir um módulo Angular. Vamos analisar o significado e o propósito de cada uma das propriedades fornecidas no objeto passado para o @NgModule:

// providers: A propriedade providers é usada para listar os provedores de serviços que estão disponíveis dentro do escopo deste módulo. Provedores são classes que fornecem instâncias compartilhadas de serviços que podem ser injetados em componentes, diretivas ou outros serviços. Quando você declara um provedor em um módulo, ele está disponível para todos os componentes e serviços dentro desse módulo e de seus módulos filhos. Se você não tiver nenhum provedor específico para este módulo, você pode deixar a matriz vazia, como no exemplo fornecido.

// declarations: A propriedade declarations é usada para listar os componentes, diretivas e pipes que pertencem a este módulo. Os itens listados aqui podem ser usados nos templates dos componentes pertencentes ao módulo ou em outros componentes e diretivas dentro do mesmo módulo. O LoginComponent é um exemplo de componente declarado neste módulo.

// imports: A propriedade imports é usada para importar outros módulos que este módulo depende. Isso permite que você reutilize funcionalidades de outros módulos no seu módulo atual. No exemplo fornecido, o CommonModule e o LoginRoutingModule estão sendo importados, o que significa que este módulo pode usar funcionalidades do CommonModule e ter acesso às rotas definidas no LoginRoutingModule.

// O @NgModule é uma parte fundamental da estrutura de um aplicativo Angular, pois permite organizar funcionalidades, componentes e serviços em módulos separados. Cada módulo pode ter suas próprias configurações, dependências e funcionalidades específicas. Isso ajuda a manter o código do aplicativo organizado e facilita a reutilização de código em diferentes partes do aplicativo.
