import { FC, useContext, useEffect, useState } from 'react';
import Modal from 'components/Modal';
import QRCode from 'qrcode';
import copy from 'copy-to-clipboard';
import styles from './index.module.scss';
import useConfigReducer from 'hooks/useConfigReducer';
import { ReactComponent as CopyIcon } from 'assets/icons/copy.svg';
import { ReactComponent as SuccessIcon } from 'assets/icons/toast_success.svg';
import { ReactComponent as BTCToken } from 'assets/images/token-btc.svg';
import { NomicContext } from 'context/nomic-context';
import { ReactComponent as CloseIcon } from 'assets/icons/close-icon.svg';
import { reduceString } from 'libs/utils';
import { Button } from 'components/Button';
import { NomicClientInterface } from 'libs/nomic/models/nomic-client/nomic-client-interface';
interface ModalProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  // urlQRCode: string;
  // infoBTCDeposit: {
  //   index: number;
  //   bridgeFeeRate: number;
  //   minerFeeRate: number;
  //   depositsEnabled: boolean;
  //   threshold: any[];
  // };
}

const DepositBtcModal: FC<ModalProps> = ({ isOpen, open, close }) => {
  const [theme] = useConfigReducer('theme');
  const [isCopied, setIsCopied] = useState(false);
  const [urlQRCode, setUrlQRCode] = useState(null);
  const nomic = useContext(NomicContext);

  const expiration = nomic?.depositAddress?.expirationTimeMs ?? Date.now();
  useEffect(() => {
    (async () => {
      if (nomic?.depositAddress?.bitcoinAddress) {
        const url = await QRCode.toDataURL(nomic.depositAddress.bitcoinAddress);
        setUrlQRCode(url);
      }
    })();
    return () => {};
  }, [nomic?.depositAddress?.bitcoinAddress]);

  useEffect(() => {
    const TIMEOUT_COPY = 2000;
    let timeoutId;
    if (isCopied) {
      timeoutId = setTimeout(() => {
        setIsCopied(false);
      }, TIMEOUT_COPY);
    }

    return () => clearTimeout(timeoutId);
  }, [isCopied]);

  return (
    <Modal theme={theme} isOpen={isOpen} close={close} open={open}>
      {/* <div className={classNames(style.modal)}>
        <button
          onClick={async () => {
            await nomic.setRecoveryAddress('tb1qepum984v3l7nnvzy79dtgx3kh709uvm93v3qjj');
          }}
        >
          Set recovery address
        </button>
      </div> */}
      <div className={styles.deposit}>
        <div className={styles.label}>
          <span className={styles.title}>Transfer BTC to Oraichain</span>
          <button onClick={close}>
            <CloseIcon color="#232521" />
          </button>
        </div>
        <div className={styles.info}>
          <img src={urlQRCode} alt="Qr code" />
          <div className={styles.address}>
            <BTCToken />
            <button
              className={styles.copy}
              onClick={() => {
                if (nomic?.depositAddress?.bitcoinAddress) {
                  copy(nomic?.depositAddress?.bitcoinAddress);
                  setIsCopied(true);
                }
              }}
            >
              <span>{reduceString(nomic?.depositAddress?.bitcoinAddress, 15, 15) ?? '...'}</span>
              {isCopied ? <SuccessIcon width={20} height={20} /> : <CopyIcon />}
            </button>
          </div>

          <div className={styles.error}>
            {/* <CopyIcon /> */}
            <span>
              This address expires in 4 days; deposits sent after that will be lost. Transactions fail for deposit
              amounts exceeding 21 BTC
            </span>
          </div>
        </div>
        <div className={styles.estimate}>
          <div className={styles.timeMinerFee}>
            <span className={styles.time}>Expected transaction time:</span>
            <span className={styles.miner}>Bitcoin Miner Fee:</span>
            <span className={styles.fee}>Bridge Fee:</span>
          </div>
          <div className={styles.value}>
            <span>10 mins - 1.5 hours</span>
            <span>{nomic?.depositAddress?.minerFeeRate} BTC</span>
            <span>{nomic?.depositAddress?.bridgeFeeRate * 100}%</span>
          </div>
        </div>
        <div className={styles.warning}>
          <span>
            The Bitcoin Recovery address is necessary for retrieving Bitcoin in the event of an emergency disbursement.
          </span>
        </div>
        <div className={styles.btn} onClick={close}>
          <div>Close</div>
        </div>
      </div>
    </Modal>
  );
};

export default DepositBtcModal;
