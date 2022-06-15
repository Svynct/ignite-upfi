import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick closeOnEsc>
      <ModalOverlay />
      <ModalContent maxW="900px" w="unset" background="pGray.800">
        <ModalBody d="flex" alignItems="center" justifyContent="center" pt={0}>
          <Image
            src={imgUrl}
            maxW={900}
            maxH={600}
            borderRadius="8px 8px 0 0"
          />
        </ModalBody>

        <ModalFooter justifyContent="flex-start">
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
