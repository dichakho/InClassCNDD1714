import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  QuickView, Text, Container, Header, Body,
} from '@components';

class RealmTodoList extends PureComponent {
  render() {
    return (
      <Container>
        <Header backIcon title="ExampleScreen" />
        <Body>
          <QuickView>
            <Text center>Example Screen</Text>
          </QuickView>
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(RealmTodoList);
