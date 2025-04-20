package cfg

import (
	"log"
	"os"

	"gopkg.in/yaml.v3"
)

var configDirection string = "configs/config.yml"

type Config struct {
	ServerPort string      `yaml:"server_port"`
	Redis      RedisConfig `yaml:"redis"`
}

type RedisConfig struct {
	Port        int    `yaml:"port"`
	Password    string `yaml:"password"`
	DB          int    `yaml:"db"`
	PoolSize    int    `yaml:"pool_size"`
	MaxRetries  int    `yaml:"max_retries"`
	DialTimeout int    `yaml:"dial_timeout"`
}

func Load() (*Config, error) {
	data, err := os.ReadFile(configDirection)
	if err != nil {
		log.Fatalf(": [LOG] : bad location config: %v", err)
		return nil, err
	}

	var cfg Config

	if err = yaml.Unmarshal(data, &cfg); err != nil {
		log.Fatalf(": [LOG] : bad config: %v", err)
	}
	log.Print(": [LOG] : Config is up")
	return &cfg, nil
}
