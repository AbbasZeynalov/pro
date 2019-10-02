import React from 'react';
import { Layout } from 'antd';
import layoutStyles from './layout.module.scss';
import { ReactComponent as Tasks } from 'assets/svg/tasks.svg';
import { ReactComponent as Hrm } from 'assets/svg/hrm.svg';
import { ReactComponent as Vector } from 'assets/svg/vector.svg';
import { ReactComponent as Briefcase } from 'assets/svg/briefcase.svg';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import { FiMail } from 'react-icons/fi';
import { TiBell } from 'react-icons/ti';
import { Menu, Dropdown, Icon } from 'antd';
import { List, message, Avatar, Spin } from 'antd';

const { Paragraph } = Typography;

const { Header, Footer, Sider, Content } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const LayoutContainer = () => {
  return (
    <Layout>
      <Sider width={96} className={layoutStyles.sider}>
        <Menu
          className={layoutStyles.wrapper}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item>
            <Tasks/>
            <Paragraph className={layoutStyles.menuText}>
              Tapsiriqlar
            </Paragraph>
          </Menu.Item>
          <Menu.Item>
            <Briefcase/>
            <Paragraph className={layoutStyles.menuText}>
              İşə qəbul
            </Paragraph>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className={layoutStyles.header}>
          <Row gutter={16}>
            <Col span={18}>
              <div className={layoutStyles.logoWrapper}>
                <Vector/>
              </div>
            </Col>
            <Col span={6}>
              <ul className={layoutStyles.headerDetail}>
                <li><FiMail className={layoutStyles.detailIcon} /></li>
                <li><FiMail className={layoutStyles.detailIcon} /></li>
                <li>
                  <Dropdown overlay={menu} className={layoutStyles.detailDropdown}>
                    <a className="ant-dropdown-link" href="#">
                      Company name <Icon type="down" />
                    </a>
                  </Dropdown>
                </li>
              </ul>

              {/*<List itemLayout="horizontal" split={false}>*/}
              {/*  <List.Item>*/}
              {/*    <FiMail className={layoutStyles.detailIcon} />*/}
              {/*  </List.Item>*/}
              {/*  <List.Item>*/}
              {/*    <FiMail className={layoutStyles.detailIcon} />*/}
              {/*  </List.Item>*/}
              {/*  <List.Item>*/}
              {/*    <Dropdown overlay={menu} className={layoutStyles.detailDropdown}>*/}
              {/*            <a className="ant-dropdown-link" href="#">*/}
              {/*              Hover me <Icon type="down" />*/}
              {/*            </a>*/}
              {/*    </Dropdown>*/}
              {/*  </List.Item>*/}
              {/*</List>*/}

              {/*<Row className={layoutStyles.headerDetail}>*/}
              {/*  <Col span={7}>*/}
              {/*    <FiMail className={layoutStyles.detailIcon} />*/}
              {/*    <TiBell className={layoutStyles.detailIcon}/>*/}
              {/*  </Col>*/}
              {/*  <Col span={11}>*/}
              {/*    <Dropdown overlay={menu} className={layoutStyles.detailDropdown}>*/}
              {/*      <a className="ant-dropdown-link" href="#">*/}
              {/*        Hover me <Icon type="down" />*/}
              {/*      </a>*/}
              {/*    </Dropdown>*/}
              {/*  </Col>*/}
              {/*  <Col span={6}>*/}
              {/*    <FiMail/>*/}
              {/*  </Col>*/}
              {/*</Row>*/}
            </Col>
          </Row>
        </Header>
        <Content className={layoutStyles.content}>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
