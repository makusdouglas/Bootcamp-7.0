/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import Container from '../../Components/Container';
import { Form, SubmitButton, List, InputTextArea, LabelError } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: false,
  };

  // carregar repositorios do local storage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // atualizar dados no localstorage
  componentDidUpdate(_, prevState) {
    // prevProps, prevState
    const { repositories } = this.state;
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const { newRepo, repositories } = this.state;
    try {
      const response = await api.get(`/repos/${newRepo}`);
      const data = {
        name: response.data.full_name,
      };
      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
        error: false,
      });
    } catch (error) {
      this.setState({
        newRepo: '',
        loading: false,
        error: true,
      });
    }
  };

  render() {
    const { newRepo, loading, repositories, error } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
        <Form onSubmit={this.handleSubmit}>
          {error ? (
            <div>
              <InputTextArea
                error={error}
                label="insira o repositório Novamente"
                value={newRepo}
                onChange={this.handleInputChange}
              />
              <LabelError>Insira novamente o repositório</LabelError>
            </div>
          ) : (
            <div>
              <InputTextArea
                error={error}
                label="insira o repositório Novamente"
                value={newRepo}
                onChange={this.handleInputChange}
              />
              <LabelError />
            </div>
          )}

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#fff" size={18} />
            ) : (
              <FaPlus color="#fff" size={18} />
            )}
          </SubmitButton>
        </Form>
        <List>
          {repositories.map(repo => {
            return (
              <li key={repo.name}>
                <span>{repo.name}</span>
                <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                  Detalhes
                </Link>
              </li>
            );
          })}
        </List>
      </Container>
    );
  }
}
