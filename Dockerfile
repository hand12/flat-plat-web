FROM ruby:2.3.1
ENV LANG C.UTF-8
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN gem install bundler
# RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock
RUN bundle install
ENV APP_HOME /myapp
ADD . $APP_HOME

# FROM ruby:2.4.0
# RUN rm /bin/sh && ln -s /bin/bash /bin/sh
# RUN apt-get update -qq && apt-get install -y build-essential libpq-dev
# RUN apt-get update && apt-get install -y yarn
# RUN apt-get install nodejs
# RUN mkdir /myapp
# WORKDIR /myapp
# ADD Gemfile /myapp/Gemfile
# ADD Gemfile.lock /myapp/Gemfile.lock
# RUN bundle install
# ADD . /myapp