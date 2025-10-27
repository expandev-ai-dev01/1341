import { Card } from '@/core/components/Card';
import { Button } from '@/core/components/Button';

/**
 * @page HomePage
 * @summary Welcome page with system overview
 * @domain core
 * @type page-component
 * @category public
 */
export const HomePage = () => {
  return (
    <div className="space-y-8">
      <Card>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Bem-vindo ao Sistema de Avaliação</h2>
        <p className="text-gray-600 mb-6">
          Sistema completo para avaliação de candidatos a vagas de desenvolvedor .NET. Selecione o
          nível de senioridade e aplique testes personalizados com correção automática.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-primary-50 rounded-lg">
            <h3 className="font-semibold text-primary-900 mb-2">100 Perguntas</h3>
            <p className="text-sm text-primary-700">
              Banco completo de questões categorizadas por nível e tópico
            </p>
          </div>
          <div className="p-4 bg-success-50 rounded-lg">
            <h3 className="font-semibold text-success-900 mb-2">Correção Automática</h3>
            <p className="text-sm text-success-700">
              Avaliação instantânea com pontuação de 0 a 10
            </p>
          </div>
          <div className="p-4 bg-warning-50 rounded-lg">
            <h3 className="font-semibold text-warning-900 mb-2">Histórico Completo</h3>
            <p className="text-sm text-warning-700">Consulte todas as avaliações realizadas</p>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Funcionalidades Principais</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-semibold mr-3">
              1
            </span>
            <div>
              <p className="font-medium text-gray-900">Seleção de Nível de Senioridade</p>
              <p className="text-sm text-gray-600">Escolha entre Junior, Pleno ou Senior</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-semibold mr-3">
              2
            </span>
            <div>
              <p className="font-medium text-gray-900">Geração de Testes</p>
              <p className="text-sm text-gray-600">10 questões aleatórias por teste</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-semibold mr-3">
              3
            </span>
            <div>
              <p className="font-medium text-gray-900">Aplicação de Testes</p>
              <p className="text-sm text-gray-600">Interface intuitiva para candidatos</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-semibold mr-3">
              4
            </span>
            <div>
              <p className="font-medium text-gray-900">Relatório de Desempenho</p>
              <p className="text-sm text-gray-600">Visualize respostas corretas e incorretas</p>
            </div>
          </li>
        </ul>
      </Card>

      <div className="flex justify-center">
        <Button size="lg">Começar Nova Avaliação</Button>
      </div>
    </div>
  );
};

export default HomePage;
