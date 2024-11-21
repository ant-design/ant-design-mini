import React, { useState } from 'react';
import { Input } from 'antd';
import copy from 'copy-to-clipboard';
import { FormattedMessage } from 'dumi';
import './Icon.less';

const { Search } = Input;

const iconTypes = [
  'MinusOutline',
  'AlipayCircleFill',
  'CheckCircleFill',
  'FireFill',
  'FaceRecognitionOutline',
  'StarFill',
  'EyeInvisibleFill',
  'SmileFill',
  'FrownFill',
  'BankcardOutline',
  'HeartOutline',
  'EyeFill',
  'HeartFill',
  'DownFill',
  'CloseCircleFill',
  'VideoOutline',
  'CouponOutline',
  'ReceiptOutline',
  'AntOutline',
  'UserCircleOutline',
  'PayCircleOutline',
  'BillOutline',
  'PlayOutline',
  'PayOutline',
  'MoreOutline',
  'ShrinkOutline',
  'ArrowsAltOutline',
  'StarOutline',
  'CheckOutline',
  'DeleteOutline',
  'LinkOutline',
  'InformationCircleOutline',
  'GlobalOutline',
  'InformationCircleFill',
  'ExclamationCircleFill',
  'CheckCircleOutline',
  'CloseCircleOutline',
  'SetOutline',
  'QuestionCircleFill',
  'QuestionCircleOutline',
  'UpCircleOutline',
  'FrownOutline',
  'DownCircleOutline',
  'ExclamationCircleOutline',
  'MinusCircleOutline',
  'RedoOutline',
  'UndoOutline',
  'EyeInvisibleOutline',
  'ForbidFill',
  'PicturesOutline',
  'PictureOutline',
  'PictureWrongOutline',
  'EyeOutline',
  'AddCircleOutline',
  'ClockCircleFill',
  'ClockCircleOutline',
  'BellMuteOutline',
  'KeyOutline',
  'BellOutline',
  'SearchOutline',
  'CollectMoneyOutline',
  'UnorderedListOutline',
  'AppstoreOutline',
  'ExclamationTriangleOutline',
  'AddOutline',
  'ScanningOutline',
  'ScanCodeOutline',
  'ExclamationOutline',
  'CloseOutline',
  'ScanningFaceOutline',
  'LeftOutline',
  'DownOutline',
  'UpOutline',
  'RightOutline',
  'KoubeiOutline',
  'KoubeiFill',
  'AAOutline',
  'ArrowDownCircleOutline',
  'MovieOutline',
  'CompassOutline',
  'LoopOutline',
  'TextOutline',
  'TagOutline',
  'FlagOutline',
  'EnvironmentOutline',
  'CalendarOutline',
  'LocationFill',
  'PhoneFill',
  'PhonebookOutline',
  'SmileOutline',
  'UserAddOutline',
  'FileWrongOutline',
  'SoundMuteFill',
  'SoundMuteOutline',
  'LockOutline',
  'UnlockOutline',
  'EditSOutline',
  'UploadOutline',
  'SoundOutline',
  'DownlandOutline',
  'SendOutline',
  'FillinOutline',
  'AudioMutedOutline',
  'AudioOutline',
  'UserOutline',
  'UserContactOutline',
  'TeamOutline',
  'UserSetOutline',
  'FileOutline',
  'MailOutline',
  'TruckOutline',
  'MailOpenOutline',
  'ChatCheckOutline',
  'ChatAddOutline',
  'ChatWrongOutline',
  'PhonebookFill',
  'AddressBookFill',
  'CalculatorOutline',
  'PieOutline',
  'HandPayCircleOutline',
  'GiftOutline',
  'TransportQRcodeOutline',
  'FolderOutline',
  'AlipaySquareFill',
  'TravelOutline',
  'AppOutline',
  'HistogramOutline',
  'MailFill',
  'CameraOutline',
  'EditFill',
  'SystemQRcodeOutline',
  'LockFill',
  'AudioFill',
  'TeamFill',
  'FilterOutline',
  'EditSFill',
  'LikeOutline',
  'TextDeletionOutline',
  'StopOutline',
  'FingerdownOutline',
  'MessageFill',
  'LocationOutline',
  'ContentOutline',
  'ExclamationShieldFill',
  'ReceivePaymentOutline',
  'ExclamationShieldOutline',
  'AddSquareOutline',
  'CloseShieldOutline',
  'CheckShieldOutline',
  'CheckShieldFill',
  'ShopbagOutline',
  'MessageOutline',
];

const iconLowerCaseTypes = iconTypes.map(item => item.toLowerCase());

function Copy(props) {
  const type = props.type;
  const [copied, setCopied] = useState(false);
  return <div className="list-icon" onClick={() => {
    copy(type);
    setCopied(true);
  }} onMouseLeave={() => {
    setCopied(false);
  }}>
    <div>
      {
        copied ? <div className='copied'>copied</div> : <>
          <span className={`ant-icon ant-icon-${type}`} />
          <div className="icontype">{type}</div>
        </>
      }
    </div>
  </div>
}


function Icon() {
  const [list, setList] = useState(iconTypes);
  const outlineList = list.filter(item => item.includes('Outline'));
  const fillList = list.filter(item => item.includes('Fill'));

  const onInput = (e: any) => {
    const value = e.target.value.toLowerCase();
    setList(iconTypes.filter((_, index) => iconLowerCaseTypes[index].includes(value)));
  }

  const onSearch = (v) => {
    setList(iconTypes.filter((_, index) => iconLowerCaseTypes[index].includes(v.toLowerCase())));
  }

  return <>
    <div style={{ marginTop: 20 }}>
      <Search placeholder="search Icons" allowClear onInput={onInput} onSearch={onSearch} />
    </div>
    <div className="list-icons">
      {
        outlineList.map(item => <Copy key={item} type={item} />)
      }
      {
        fillList.map(item => <Copy key={item} type={item} />)
      }
    </div>
  </>
};



export default Icon;