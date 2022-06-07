import {toast} from 'react-toastify';
import {Redirect, Link} from 'wouter';
import React, {useContext, useState} from 'react';
import {BusinessEditor} from './editor/BusinessEditor';
import {Row} from '../../../components/generic/row/Row';
import {businessRegistrationFee} from './Business.const';
import {UserLayout} from '../../../components/layout/user/UserLayout';
import {BusinessDTO} from '@bobba-rp/types';
import {setURL, Icon, sessionContext} from '@instinct-web/core';
import {Container} from '../../../components/generic/container/Container';
import {RPPermissionGuard} from '../../../components/templates/permission-guard/PermissionGuard';
import {MiniJumbotron} from '../../../components/generic/mini-jumbotron/MiniJumbotron';
import {ConfirmBusinessCreationModal} from './widgets/confirm-business-creation-modal/ConfirmBusinessCreationModal';
import {UserIsOfflineGuard} from '../../../components/guard/user-is-offline-guard/UserIsOfflineGuard';

setURL('business/creator', <BusinessCreate />);

export function BusinessCreate() {
  const {user} = useContext(sessionContext);
  const [confirmation, setConfirmation] = useState<BusinessDTO>();

  function toggleConfirmation(businessDTO?: BusinessDTO) {
    setConfirmation(businessDTO);
  }

  if ((user?.credits ?? 0) < businessRegistrationFee) {
    toast.error(
      `You must have $${Number(
        businessRegistrationFee
      ).toLocaleString()} to register a business`
    );
    return <Redirect to="/businesses" />;
  }

  return (
    <UserLayout section="business">
      <RPPermissionGuard permission="websiteCreateBusiness">
        <UserIsOfflineGuard>
          <Container>
            <Row>
              <div className="col-12">
                <Link to="/businesses">
                  <Icon
                    className="fa-4x text-white"
                    style={{cursor: 'pointer'}}
                    type="caret-left"
                  />
                </Link>
              </div>
            </Row>
            <Row>
              <MiniJumbotron>
                <h2>Business Creator</h2>
                <p>Kickstart your new business today!</p>
              </MiniJumbotron>
            </Row>
            <Row>
              <div style={{width: '100%'}}>
                <BusinessEditor
                  onSubmit={toggleConfirmation}
                  editorOnly={false}
                />
                {confirmation && (
                  <ConfirmBusinessCreationModal
                    businessDTO={confirmation}
                    isOpen
                    onToggle={toggleConfirmation}
                  />
                )}
              </div>
            </Row>
          </Container>
        </UserIsOfflineGuard>
      </RPPermissionGuard>
    </UserLayout>
  );
}
