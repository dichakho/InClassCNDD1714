/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  QuickView, Text, Container, Header, Body, Image,
} from '@components';

interface Props {
  route?: any;
}
class DogDetail extends PureComponent<Props> {
  render() {
    const {
      route: { params },
    } = this.props;

    return (
      <Container>
        <Header backIcon title="Dog Detail" />
        <Body>
          <QuickView marginVertical={20}>
            <Image
              style={{ borderRadius: 10 }}
              sharp
              center
              height={300}
              source={{ uri: params?.url }}
            />
          </QuickView>
          <Text type="title" center bold>
            {params?.name}
          </Text>
          <QuickView row marginTop={10}>
            <Text style={{ flex: 1 }} type="paragraph">
              Breed for:
              {' '}
            </Text>
            <Text style={{ flex: 2 }} type="paragraph" bold>
              {params?.bred_for}
            </Text>
          </QuickView>
          <QuickView row marginTop={10}>
            <Text style={{ flex: 1 }} type="paragraph">
              Breed group:
              {' '}
            </Text>
            <Text style={{ flex: 2 }} type="paragraph" bold>
              {params?.breed_group}
            </Text>
          </QuickView>
          <QuickView row marginTop={10}>
            <Text style={{ flex: 1 }} type="paragraph">
              Life span:
            </Text>
            <Text style={{ flex: 2 }} type="paragraph" bold>
              {params?.life_span}
            </Text>
          </QuickView>
          <QuickView row marginTop={10}>
            <Text style={{ flex: 1 }} type="paragraph">
              Origin:
              {' '}
            </Text>
            <Text style={{ flex: 2 }} type="paragraph" bold>
              {params?.origin}
            </Text>
          </QuickView>
          <QuickView row marginTop={10}>
            <Text style={{ flex: 1 }} type="paragraph">
              Temperament:
              {' '}
            </Text>
            <Text style={{ flex: 2 }} type="paragraph" bold>
              {params?.temperament}
            </Text>
          </QuickView>
          <QuickView row marginTop={10}>
            <Text style={{ flex: 1 }} type="paragraph">
              Height:
              {' '}
            </Text>
            <Text style={{ flex: 2 }} type="paragraph" bold>
              {params?.height?.metric}
            </Text>
          </QuickView>
          <QuickView row marginTop={10}>
            <Text style={{ flex: 1 }} type="paragraph">
              Weight:
              {' '}
            </Text>
            <Text style={{ flex: 2 }} type="paragraph" bold>
              {params?.weight.metric}
            </Text>
          </QuickView>
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DogDetail);
