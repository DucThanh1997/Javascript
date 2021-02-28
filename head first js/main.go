// package main

// import (
// 	"fmt"
// 	"log"
// 	"net/url"
// 	// "os"
// 	"time"
// 	"encoding/json"

// 	mqtt "github.com/eclipse/paho.mqtt.golang"
// )

// func connect(clientID string, uri *url.URL) mqtt.Client {
// 	opts := createClientOptions(clientID, uri)
// 	client := mqtt.NewClient(opts)
	
// 	token := client.Connect()
// 	for !token.WaitTimeout(3 * time.Second) {
// 	}
// 	if err := token.Error(); err != nil {
// 		log.Fatal(err)
// 	}
// 	return client
// }

// func createClientOptions(clientID string, uri *url.URL) *mqtt.ClientOptions {
// 	opts := mqtt.NewClientOptions()
// 	opts.AddBroker(fmt.Sprintf("tcp://%s", uri.Host))
// 	opts.SetUsername(uri.User.Username())
// 	password, _ := uri.User.Password()
// 	opts.SetPassword(password)
// 	opts.SetClientID(clientID)
// 	return opts
// }

// func listen(uri *url.URL, topic string) {
// 	fmt.Println("uri: ", uri)
// 	client := connect("sub", uri)
// 	client.Subscribe(topic, 0, func(client mqtt.Client, msg mqtt.Message) {
		// var marshalData jsonData
		// err := json.Unmarshal(msg.Payload(), &marshalData)
		// fmt.Println("err: ", err)
		// fmt.Println("sensorData: ", marshalData.Sensor)

// 	})
// }

// type jsonData struct {
// 	Sensor 		string		`json:"sensor"` 	
// 	Name 		string 		`json:"name"` 	
// }

// func main() {
// 	uri, err := url.Parse("tcp://thanh:1@192.168.30.150:1883")
// 	if err != nil {
// 		log.Fatal(err)
// 	}
	// data := jsonData{
	// 	Sensor: 	"hello",
	// 	Name:		"teacher",
	// } 

// 	// topic := uri.Path[1:len(uri.Path)]
// 	// fmt.Println("topic: ", topic)
// 	// if topic == "" {
// 	// 	topic = "test"
// 	// }

// 	go listen(uri, "yo")

// 	client := connect("pub", uri)
// 	// timer := time.NewTicker(1 * time.Second)
// 	for {
// 		client.Publish("yo", 0, false, data)
// 		fmt.
// 		time.Sleep(10*time.Second)
// 	}
// }


package main

import (
	"fmt"
	"log"
	"net/url"
	"time"
	"encoding/json"

	mqtt "github.com/eclipse/paho.mqtt.golang"
)

type jsonData struct {
	Sensor 		string		`json:"sensor"` 	
	Name 		string 		`json:"name"` 	
}

func connect(clientID string, uri *url.URL) mqtt.Client {
	opts := createClientOptions(clientID, uri)
	client := mqtt.NewClient(opts)
	
	token := client.Connect()
	for !token.WaitTimeout(3 * time.Second) {
	}
	if err := token.Error(); err != nil {
		log.Fatal(err)
	}
	return client
}

func createClientOptions(clientId string, uri *url.URL) *mqtt.ClientOptions {
	opts := mqtt.NewClientOptions()
	opts.AddBroker(fmt.Sprintf("tcp://%s", uri.Host))
	opts.SetUsername(uri.User.Username())
	password, _ := uri.User.Password()
	opts.SetPassword(password)
	opts.SetClientID(clientId)
	return opts
}

func listen(uri *url.URL, topic string) {
	a := make(map[string]string)
	client := connect("sub", uri)
	fmt.Println("listening")
	client.Subscribe(topic, 0, func(client mqtt.Client, msg mqtt.Message) {
		// var marshalData jsonData
		err := json.Unmarshal(msg.Payload(), &a)
		fmt.Println("err: ", err)
		fmt.Println("sensorData: ", a["name"])
	})
}


func main() {
	uri, err := url.Parse("tcp://thanh:1@192.168.30.150:1883/yo")
	if err != nil {
		log.Fatal(err)
	}
	topic := uri.Path[1:len(uri.Path)]
	if topic == "" {
		topic = "test"
	}
	// a := jsonData{
	// 	Sensor: 	"hello",
	// 	Name:		"teacher",
	// } 
	go listen(uri, topic)


	// client := connect("pub", uri)
	// timer := time.NewTicker(1 * time.Second)
	for {
		fmt.Println("a")
		time.Sleep(100 *time.Second)
	}
}