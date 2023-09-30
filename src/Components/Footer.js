import React from 'react';
import { FaGithub } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { Toaster, toast } from 'react-hot-toast';

const Footer = () => {
  async function copyToClipboard(){
    try {
      await navigator.clipboard.writeText("gabrieltc555@gmai.com")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <footer>

        <button onMouseEnter={() => {
          toast("Ve al repositorio de esta página", {
            className: "toasts gitHubBtn"
          })
        }}
        
        onMouseLeave={() => {
          toast.dismiss();
        }}
        >
          <a target='_blank' href='https://github.com/DeikuModder/react-test-web' rel='noreferrer'><FaGithub /></a>
        </button>

        <button onMouseEnter={() => {
          toast("Copia mi gmail si quieres contactarme!", {
            className: "toasts gmailToast"
          })
        }}
        
        onMouseLeave={() => {
          toast.dismiss();
        }}

        onClick={() => {
          setTimeout(() => {
              try {
                copyToClipboard();
                toast.success("Copiado al portapapeles!")
              } catch (error) {
                toast.error("Ocurrio un error al copiar")
              }
          }, 1500)
        }}  
        >
          <AiFillMail />
        </button>


        <button onMouseEnter={() => {
          toast("Ve a la página oficial de React", {
            className: "toasts reactToast"
          })
        }}>
          <a href='https://es.react.dev' target='_blank' rel='noreferrer'><FaReact /></a>
        </button>

        <Toaster gutter={0}
          toastOptions={{
            duration: 1350,
            className: "toasts"
          }}
          />
    </footer>
  )
}

export default Footer
