import React from 'react';
import './BusinessPage.scss';
import {Col} from 'reactstrap';
import {Link, useRoute} from 'wouter';
import {Row} from '../../../components/generic/row/Row';
import {Card} from '../../../components/generic/card/Card';
import {UserLayout} from '../../../components/layout/user/UserLayout';
import {useFetchBusinessByID} from '@bobba-rp/web';
import {Container} from '../../../components/generic/container/Container';
import {UserContainer} from '../../../components/templates/user-container/UserContainer';
import {Avatar, Icon, setURL} from '@instinct-web/core';
import {BusinessHeader} from './widgets/business-header';
import {BusinessTools} from './widgets/business-tools/BusinessTools';

setURL('businesses/:businessID', <BusinessPage />);

export function BusinessPage() {
  const [matched, params] = useRoute<{businessID: string}>(
    '/businesses/:businessID'
  );

  const business = useFetchBusinessByID(params!.businessID);

  if (business === undefined) {
    return (
      <UserLayout>
        <Container>
          <Row>
            <Col className="text-center text-white" xs={12}>
              <h2 style={{marginLeft: 15}}>
                <Icon className="fa-spin" type="spinner" /> Loading Business...
              </h2>
            </Col>
          </Row>
        </Container>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <Container>
        <Row>
          <Col xs={12}>
            <Link to="/businesses">
              <Icon
                className="fa-4x text-white"
                style={{cursor: 'pointer'}}
                type="caret-left"
              />
            </Link>
          </Col>
        </Row>
        <Row>
          <div className="col-12">
            <BusinessHeader business={business} />
          </div>
        </Row>
        <Row>
          <Col xs={3}>
            <Card className="text-center" header="Managed By">
              <h3 style={{background: '#0f406b', padding: 5, borderRadius: 2}}>
                {business.owner.username}
              </h3>
              <div
                className="avatar"
                style={{marginLeft: 'auto', marginRight: 'auto'}}
              >
                <Avatar
                  look={business.owner.figure}
                  direction={2}
                  gesture="sml"
                  size="l"
                />
              </div>
            </Card>
            <BusinessTools business={business} />
          </Col>
          <Col xs={9}>
            {business.positions.map(position => (
              <Row className="mb-4" key={`position_${position.id}`}>
                <Col xs={12}>
                  <Card header={position.name}>
                    {position.employees.length === 0 && (
                      <p>There are no employees in this role yet!</p>
                    )}
                    {position.employees.map(user => (
                      <UserContainer
                        key={user.id}
                        user={user as any}
                        showJob={false}
                      />
                    ))}
                  </Card>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </UserLayout>
  );
}
