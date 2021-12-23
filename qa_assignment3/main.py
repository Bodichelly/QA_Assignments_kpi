import time

from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.select import Select
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

options = Options()
options.binary_location = "C:\Program Files\Google\Chrome\Application\chrome.exe"
options.add_argument("--incognito")
ser = Service(r"C:\Program Files\Google\Chrome\Application\chromedriver.exe")
driver = webdriver.Chrome(service=ser, options=options)

driver.get('https://www.iciparisxl.be')
assert 'Homepage | ICI PARIS XL België' in driver.title

try:
    wait = WebDriverWait(driver, 20)
    # pass cookie banner
    accept_all_biscuits = wait.until(
        EC.visibility_of_element_located((By.ID, "onetrust-accept-btn-handler"))
    )
    time.sleep(1)
    accept_all_biscuits.click()
    # open login popup
    login_popup_button = driver.find_element(By.CLASS_NAME, 'header-login__link')
    time.sleep(1)
    login_popup_button.click()
    # redirect to register page
    login_popup_link = driver.find_element(By.CSS_SELECTOR, '.login-form__second-link .login-form__link')
    time.sleep(1)
    login_popup_link.click()
    wait.until(EC.url_to_be('https://www.iciparisxl.be/nl/register'))
    # fill all fields step 1
    wait.until(
        EC.visibility_of_element_located((By.XPATH, "//input[@name='uid']"))
    ).send_keys("qweqweasd1@qwe.qwe")
    wait.until(
        EC.visibility_of_element_located((By.XPATH, "//input[@name='uidConfirm']"))
    ).send_keys("qweqweasd1@qwe.qwe")
    wait.until(
        EC.visibility_of_element_located((By.XPATH, "//input[@name='password' and @autocomplete='new-password']"))
    ).send_keys("Password1")

    wait.until(
        EC.visibility_of_element_located((By.XPATH, "//input[@name='passwordConfirm']"))
    ).send_keys("Password1")
    goto_next_step = driver.find_element(By.CSS_SELECTOR, 'e2-wizard-next button[type=submit]')
    time.sleep(1)
    goto_next_step.click()
    # fill all fields step 2
    gender_radio = wait.until(
        EC.presence_of_element_located((By.XPATH, "//input[@name='gender']"))
    )
    driver.execute_script("arguments[0].click();", gender_radio)
    wait.until(
        EC.visibility_of_element_located((By.XPATH, "//input[@name='firstName']"))
    ).send_keys("Qwe")
    wait.until(
        EC.visibility_of_element_located((By.XPATH, "//input[@name='lastName']"))
    ).send_keys("Asd")
    wait.until(
        EC.visibility_of_element_located((By.XPATH, "//input[@name='line1']"))
    ).send_keys("Tmp name st.")
    wait.until(
        EC.visibility_of_element_located((By.XPATH, "//input[@name='line2']"))
    ).send_keys("123")
    wait.until(
        EC.visibility_of_element_located((By.XPATH, "//input[@name='postalCode']"))
    ).send_keys("7711")
    wait.until(
        EC.visibility_of_element_located((By.XPATH, "//input[@name='town']"))
    ).send_keys("Brussels")

    date_selects = driver.find_elements(By.CSS_SELECTOR, '.display-as-select__wrapper .native-select .select')

    for option in date_selects[0].find_elements(By.CSS_SELECTOR, 'option'):
        if option.text == '20':
            option.click()  # select() in earlier versions of webdriver
            break

    for option in date_selects[1].find_elements(By.CSS_SELECTOR, 'option'):
        if option.text == 'Mrt':
            option.click()  # select() in earlier versions of webdriver
            break

    for option in date_selects[2].find_elements(By.CSS_SELECTOR, 'option'):
        if option.text == '1911':
            option.click()  # select() in earlier versions of webdriver
            break

    wait.until(
        EC.presence_of_element_located((By.XPATH, "//e2-form-toggler[@name='termsCheck']"))
    ).click()
    wait.until(
        EC.presence_of_element_located((By.XPATH, "//e2-form-toggler[@name='privacyPolicyAccepted']"))
    ).click()
    # submit register
    # register_button = driver.find_element(By.CSS_SELECTOR, 'e2-wizard-submit button[type=submit]')
    wait.until(
        EC.presence_of_element_located((By.XPATH, "//e2-button[@button-label='REGISTREER']"))
    ).click()
    wait.until(EC.url_to_be('https://www.iciparisxl.be/nl/my-account'))

except Exception:
    print("Oops...")
    print(Exception)
finally:
    print("Finish")
