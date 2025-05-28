"use client"
import { useState } from "react"

// Import Botpress Webchat components
// To use this, first install: npm install @botpress/webchat@2.3
// Then uncomment the line below and remove the placeholder components
// import { Webchat, WebchatProvider, Fab, getClient, Configuration } from '@botpress/webchat'

// Placeholder types and components (remove these when using real Botpress)
interface Configuration {
  color?: string
}

interface Client {
  clientId: string
}

// Placeholder components - replace with real imports after installing @botpress/webchat@2.3
const WebchatProvider = ({ children, client, configuration }: any) => children
const Webchat = () => (
  <div className="w-full h-full">
    {/* This will be replaced by the actual Botpress Webchat component */}
    <div className="bg-white rounded-lg shadow-lg border h-full flex flex-col">
      <div className="bg-blue-600 text-white p-3 rounded-t-lg">
        <h3 className="font-semibold">Port Assistant</h3>
      </div>
      <div className="flex-1 p-4 flex items-center justify-center text-gray-500">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-sm">Install @botpress/webchat@2.3</p>
          <p className="text-xs mt-1">Client ID: 63aa693c-3318-4e28-914c-9e71bdb6e490</p>
        </div>
      </div>
    </div>
  </div>
)

const Fab = ({ onClick }: any) => (
  <button
  onClick={onClick}
  className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95"
>
  <img
    src="/images/robo.png"
    alt="Chat Icon"
    className="w-8 h-8"
  />
</button>
)

const getClient = ({ clientId }: { clientId: string }) => ({ clientId })

// Your exact configuration
const clientId = "63aa693c-3318-4e28-914c-9e71bdb6e490"

const configuration: Configuration = {
  color: "#000",
}

export default function BotpressChatbot() {
  const client = getClient({
    clientId,
  })

  const [isWebchatOpen, setIsWebchatOpen] = useState(false)

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <WebchatProvider client={client} configuration={configuration}>
        <Fab onClick={toggleWebchat} />
        <div
          className={`absolute bottom-16 right-0 w-80 h-96 transition-all duration-300 transform ${
            isWebchatOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
          }`}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  )
}
