import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
`

export default class Scheduler extends Component {
  render() {
    return <PageContainer title="スケジューラ" data={data} />
  }
}
